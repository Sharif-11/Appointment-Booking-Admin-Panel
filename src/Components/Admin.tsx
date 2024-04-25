import { Outlet } from "react-router";
import AdminNav from "./AdminNav";
const Admin = ({
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  m-0 w-[100%] h-[100vh]  border-2">
      <div className="col-span-1">
        <AdminNav setShowPage={setShowPage}></AdminNav>
      </div>
      <div className="p-4  col-span-2 rounded-2xl w-[100%] h-[100vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
