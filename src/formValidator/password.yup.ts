import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, "*Password must be at least 6 characters")
    .required("*Old password is required"),
  password: Yup.string()
    .min(6, "*Password must be at least 6 characters")
    .notOneOf(
      [Yup.ref("oldPassword"), null],
      "*New password must be different from old password"
    )
    .required("*New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "*Passwords must match")
    .required("*Confirm Password is required"),
});
export default passwordSchema;
