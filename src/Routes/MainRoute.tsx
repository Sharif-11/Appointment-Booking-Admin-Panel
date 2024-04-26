import App from "../App";
import AdminScheduleTimings from "../Components/AdminScheduleTimings";
import ChangePassword from "../Components/ChangePassword";
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
    ],
  },
];

export default mainRouter;
