import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import axios from "axios";

import { IPaypal } from "../../../interfaces";
import { db } from "../../../database";
import { Order } from "../../../models";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return payOrder(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getPaypalBearerToken = async () => {
  const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT}:${PAYPAL_SECRET}`,
    "utf-8"
  ).toString("base64");
  const body = new URLSearchParams("grant_type=client_credentials");

  try {
    const { data } = await axios.post(
      process.env.PAYPAL_OAUTH_URL || "",
      body,
      {
        headers: {
          Authorization: `Basic ${base64Token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }

    return null;
  }
};

const payOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // TODO: validar sisión del usuario
  // const session: any = await getSession({ req });

  // if (!session) {
  //   return res.status(401).json({
  //     message: "Debe estar autenticado para realizar el pago de la orden",
  //   });
  // }

  const paypalBearerToken = await getPaypalBearerToken();

  if (!paypalBearerToken) {
    return res
      .status(400)
      .json({ message: "No se pudo confirmar el token de Paypal" });
  }

  const { transactionId = "", orderId = "" } = req.body;

  const { data } = await axios.get<IPaypal.PaypalOrderStatusResponse>(
    `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${paypalBearerToken}`,
      },
    }
  );

  if (data.status !== "COMPLETED") {
    return res.status(401).json({ message: "Orden no reconocida" });
  }

  await db.connect();
  const dbOrder = await Order.findById(orderId);

  if (!dbOrder) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: "La orden no existe en la base de datos" });
  }

  if (dbOrder.total !== Number(data.purchase_units[0].amount.value)) {
    await db.disconnect();
    return res.status(400).json({
      message:
        "Los montos de Paypal y la orden guardada en el sistema no son iguales",
    });
  }

  dbOrder.transactionId = transactionId;
  dbOrder.isPaid = true;
  await dbOrder.save();

  await db.disconnect();

  // TODO: aquí se pueden enviar correo o cualquier lógica para avisar que se realizo con exito la compra.
  // !* Se puede mandar con correo con la factura

  return res.status(200).json({ message: "Orden pagada" });
};
