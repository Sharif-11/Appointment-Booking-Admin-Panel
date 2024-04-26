import { useState } from "react";
import axiosInstance from "../Axios/axios";
import passwordSchema from "../formValidator/password.yup";
import "./ChanePassword.css";
import CustomField from "./Formik/CustomField";
import CustomForm from "./Formik/CustomForm";
const ChangePassword = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<boolean | null>(null);
  const initialValues = {
    password: "",
    confirmPassword: "",
    oldPassword: "",
  };
  const handleSubmit = ({
    password,
    oldPassword,
  }: {
    password: string;
    oldPassword: string;
  }) => {
    setStatus(null);
    setMessage(null);
    setLoading(true);
    axiosInstance
      .patch("/user/password", { password, oldPassword })
      .then(({ data }) => {
        setStatus(data.status);
        setLoading(false);
        data.status && setMessage(data.message);
      })
      .catch((err) => {
        setStatus(false);
        setLoading(false);
        setMessage(err.response.data.message);
      });
  };
  return (
    <div className="card my-16">
      <CustomForm
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={passwordSchema}
      >
        <CustomField
          type="oldPassword"
          name="oldPassword"
          labelText={"Old Password"}
          placeholder="Enter old password"
          className="input input-bordered"
        />
        <CustomField
          type="password"
          name="password"
          labelText={"Password"}
          placeholder="Enter new password"
          className="input input-bordered"
        />
        <CustomField
          type="password"
          name="confirmPassword"
          labelText={"Confirm Password"}
          placeholder="Enter password"
          className="input input-bordered"
        />
        <button type="submit" className="my-4 btn glass bg-success text-white">
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </CustomForm>
      {status ? (
        <p className="text-[green] font-[600] text-md text-center">
          *{message}
        </p>
      ) : (
        <p className="text-[red] font-[600] text-md text-center">*{message}</p>
      )}
    </div>
  );
};

export default ChangePassword;
