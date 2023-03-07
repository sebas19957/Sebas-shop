import * as yup from "yup";
import messages from "./messages";

export const UserValidation = yup.object({
  email: yup
    .string()
    .email(messages.INVALID_EMAIL_ADDRESS)
    .required(messages.REQUIRED_FIELD),
  phone: yup.string().required(messages.REQUIRED_FIELD),
  gender: yup.string(),
  civilDtatus: yup.string(),
  country: yup.string(),
  city: yup.string(),
  zip: yup.number(),
  address: yup.string(),
  addressDesciption: yup.string(),
  occupation: yup.string(),
  studyLevel: yup.string(),
  workActivity: yup.string(),
});
