import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  email: yup.string().required().email(),
  fullName: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Only numbers"),
});

export const updateContactSchema = yup.object().shape({
  id: yup.string().required(),
  email: yup.string().notRequired().email(),
  fullName: yup.string().notRequired(),
  phone: yup
    .string()
    .notRequired()
    .matches(/^[0-9]+$/, "Only numbers"),
});
