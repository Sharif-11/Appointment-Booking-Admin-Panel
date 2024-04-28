import { useContext } from "react";
import { BsClockFill } from "react-icons/bs";
import { FaCalendar, FaSignOutAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import axiosInstance from "../Axios/axios";
const AdminNav = ({
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
  const { setUser, user } = useContext(UserContext);
  const handleLogout = async () => {
    await axiosInstance.post("/user/logout", {}).then(() => {
      setUser(null);
      setShowPage({ login: true, signup: false, dashboard: false });
    });
  };
  console.log(user);
  return (
    <div className="bg-white border-2 rounded-2xl row-span-3  divide-y h-[100%] w-[375px]">
      {/* navigation */}
      <div className="text-center mt-8">
        <Link to="/" className="avatar">
          <div className="w-24 rounded-full ring-4 ring-success ring-offset ring-offset-2">
            <img src="https://placekitten.com/g/200/202" />
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <small className="text-muted">{user?.designation}</small>
        </Link>
      </div>
      <div className="flex flex-col divide-y m-5 mt-16">
        <NavLink
          to="dashboard"
          //activeClassName="active
          className={({ isActive }) =>
            isActive
              ? "p-3 active flex items-center "
              : " items-center flex p-3 text-slate-400"
          }
        >
          <RxDashboard className="me-3"></RxDashboard> Dashboard
        </NavLink>

        <NavLink
          to="schedule"
          className={({ isActive }) =>
            isActive
              ? "p-3  active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <BsClockFill className="me-3"></BsClockFill> Schedule Timings
        </NavLink>
        <NavLink
          to="appointment"
          className={({ isActive }) =>
            isActive
              ? "p-3  active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <FaCalendar className="me-3"></FaCalendar>Create Appointment
        </NavLink>
        <NavLink
          to="manage-appointment"
          className={({ isActive }) =>
            isActive
              ? "p-3  active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <FaCalendar className="me-3"></FaCalendar>Manage Appointment
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "p-3 active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <MdManageAccounts className="me-3"></MdManageAccounts> Profile
          Settings
        </NavLink>

        <NavLink
          to="change-password"
          className={({ isActive }) =>
            isActive
              ? "p-3 active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <RiLockPasswordFill className="me-3"></RiLockPasswordFill> Change
          Password
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-3 active flex items-center"
              : "items-center flex p-3 text-slate-400"
          }
        >
          <FaSignOutAlt className="me-3"></FaSignOutAlt>{" "}
          <span onClick={handleLogout}>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminNav;
