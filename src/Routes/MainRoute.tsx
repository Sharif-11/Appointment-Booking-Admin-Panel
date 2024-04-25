import App from "../App";
import AdminScheduleTimings from "../Components/AdminScheduleTimings";
import Dashboard from "../Components/Dashboard";

const mainRouter = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "schedule",
        element: <AdminScheduleTimings />,
      },
    ],
  },
];

export default mainRouter;
