import * as yup from "yup";

export const createClientSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(/[A-Z]/, "Must contain at least 1 capital letter")
    .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
    .matches(/(\d)/, "Must contain at least 1 number")
    .matches(/(\W)|_/, "Must contain at least 1 special character")
    .matches(/.{8,}/, "Must contain at least 8 digits"),
  fullName: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Only numbers"),
});

export const updateClientSchema = yup.object().shape({
  email: yup.string().notRequired().email(),
  password: yup
    .string()
    .notRequired()
    .matches(/[A-Z]/, "Must contain at least 1 capital letter")
    .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
    .matches(/(\d)/, "Must contain at least 1 number")
    .matches(/(\W)|_/, "Must contain at least 1 special character")
    .matches(/.{8,}/, "Must contain at least 8 digits"),
  fullName: yup.string().notRequired(),
  phone: yup
    .string()
    .notRequired()
    .matches(/^[0-9]+$/, "Only numbers"),
});
