import { createContext, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import "./App.css";
import axiosInstance from "./Axios/axios";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Doctor } from "./Interfaces/Doctor";
export const UserContext = createContext<any>(null);
function App() {
  const [user, setUser] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState({
    signup: false,
    login: false,
    dashboard: false,
  });
  useEffect(() => {
    // const doctor = localStorage.getItem("doctor");
    // if (doctor == null) {
    //   axiosInstance
    //     .get("/user/login")
    //     .then(({ data }: { data: any }) => {
    //       if (data?.status) {
    //         setUser(data?.data);
    //         localStorage.setItem("doctor", JSON.stringify(data?.data));
    //         setShowPage({ dashboard: true, signup: false, login: false });
    //       }
    //     })
    //     .catch(() => {
    //       axiosInstance
    //         .get("/doctor-info")
    //         .then(({ data }) => {
    //           if (data?.data) {
    //             localStorage.setItem("doctorExist", "yes");
    //             setShowPage({ signup: false, login: true, dashboard: false });
    //           } else {
    //             setShowPage({ signup: true, login: false, dashboard: false });
    //             localStorage.removeItem("doctorExist");
    //           }
    //         })
    //         .catch(() =>
    //           setShowPage({ signup: true, login: false, dashboard: false })
    //         );
    //     });
    // } else {
    //   setUser(JSON.parse(doctor as string));
    //   setShowPage({ signup: false, login: false, dashboard: true });
    // }
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/doctor-info")
      .then(({ data }: { data: any }) => {
        if (data?.data) {
          setShowPage({ signup: false, login: true, dashboard: false });
        } else {
          setShowPage({ signup: true, login: false, dashboard: false });
        }
      })
      .catch(() => {
        setShowPage({ signup: true, login: false, dashboard: false });
      });
    axiosInstance
      .get("/user/login")
      .then(({ data }: { data: any }) => {
        if (data?.data) {
          setShowPage({ signup: false, login: false, dashboard: true });
          setUser(data?.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {loading ? (
          <div className="flex justify-center items-center w-[100vw] h-[100vh]">
            <HashLoader color="#36d7b7" size={250} />
          </div>
        ) : (
          <>
            {showPage.signup === true && <Signup setShowPage={setShowPage} />}
            {showPage.login === true && <Login setShowPage={setShowPage} />}
            {showPage.dashboard === true && <Admin setShowPage={setShowPage} />}
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
