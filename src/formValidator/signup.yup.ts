import * as Yup from "yup";
const signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
  dateOfBirth: Yup.date()
    .nullable()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  phoneNo: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  designation: Yup.string()
    .required("Designation is required")
    .max(36, "Designation must be atmost 36 characters"),
  aboutMe: Yup.string()
    .optional()
    .max(256, "Description is of at most 256 characters"),
});

export default signupSchema;
