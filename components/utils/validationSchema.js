import * as yup from "yup";

export const signInSchema = yup.object().shape({
  identifier: yup
    .string()
    .email("must be a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
});

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("no password provided.")
    .min(6, "password is too short - should be 6 chars minimum."),
});
