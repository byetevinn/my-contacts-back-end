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
    .matches(/^[0-9]*$/, "Only numbers")
    .test("phone", "Must contain at least 9 digits", (value) => {
      if (!value) return true;
      return value.length >= 9;
    })
    .max(11, "Must contain a maximum of 11 digits"),
});
