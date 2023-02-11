import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";
import { IOrder, IProduct } from "../../../interfaces";
import { Order, Product, User } from "../../../models";

type Data = {
  numberOfOrders: number;
  paidOrders: number;
  notPaidOrders: number;
  numberOfclients: number;
  numberOfProducts: number;
  productsWhitNoInventory: number;
  lowInventory: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();

  const [
    numberOfOrders,
    paidOrders,
    notPaidOrders,
    numberOfclients,
    numberOfProducts,
    productsWhitNoInventory,
    lowInventory,
  ] = await Promise.all([
    Order.count(),
    Order.find({ isPaid: true }).count(),
    Order.find({ isPaid: false }).count(),
    User.count(),
    Product.count(),
    Product.find({ inStock: 0 }).count(),
    Product.find({ inStock: { $lte: 10 } }).count(),
  ]);

  await db.disconnect();

  res.status(200).json({
    numberOfOrders,
    paidOrders,
    notPaidOrders,
    numberOfclients,
    numberOfProducts,
    productsWhitNoInventory,
    lowInventory,
  });
}
