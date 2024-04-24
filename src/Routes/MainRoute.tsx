import App from "../App";
import Login from "../Components/Login";

const mainRouter = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default mainRouter;
