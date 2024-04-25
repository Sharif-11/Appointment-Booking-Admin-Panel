import { useContext, useState } from "react";
import { UserContext } from "../App";
import axiosInstance from "../Axios/axios";
import loginSchema from "../formValidator/login.yup";
import CustomField from "./Formik/CustomField";
import CustomForm from "./Formik/CustomForm";

const Login = ({
  setShowPage,
}: {
  setShowPage: React.Dispatch<
    React.SetStateAction<{
      signup: boolean;
      login: boolean;
      dashboard: boolean;
    }>
  >;
}) => {
  // const {user,setUser}=useContext(UserContext)
  const { setUser, user } = useContext(UserContext);
  const [status, setStatus] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const initialValues = {
    phoneNo: "01776775495",
    password: "123456",
  };
  const handleSubmit = async (values: any) => {
    await axiosInstance
      .post("/user/login", values)
      .then(({ data }) => {
        if (data.status) {
          const { token, ...others } = data.data;
          console.log(others);
          setUser(others);
          // localStorage.setItem("token", token);
          setStatus(true);
          setShowPage({ signup: false, login: false, dashboard: true });
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        setStatus(false);
        setMessage(message);
      });
  };
  return (
    <div className="m-7 mt-24">
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login Now!</h1>
          </div>

          <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
            <CustomForm
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={loginSchema}
            >
              <CustomField
                type="tel"
                name="phoneNo"
                labelText="Phone"
                className="bg-white w-full input input-bordered"
                placeholder="Enter Phone Number"
              />
              <CustomField
                type="password"
                name="password"
                labelText="Password"
                className="bg-white w-full input input-bordered"
                placeholder="Enter Password"
              />
              <div className="form-control mt-6">
                <button
                  className="btn bg-success glass text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </CustomForm>
            {status === false && (
              <p className="text-[red] text-md my-1 text-[600] text-center">
                *{message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
