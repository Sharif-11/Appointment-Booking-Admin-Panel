import App from "../App";
import AdminScheduleTimings from "../Components/AdminScheduleTimings";
import ChangePassword from "../Components/ChangePassword";
import CreateAppointment from "../Components/CreateAppointment";
import Dashboard from "../Components/Dashboard";
import ProfileSettings from "../Components/ProfileSettings";

const mainRouter = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "schedule",
        element: <AdminScheduleTimings />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "settings",
        element: <ProfileSettings />,
      },
      {
        path: "appointment",
        element: <CreateAppointment />,
      },
    ],
  },
];

export default mainRouter;
