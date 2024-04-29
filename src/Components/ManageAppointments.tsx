import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";
import Appointments from "./Appointments";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState<boolean | null>(null);
  useEffect(() => {
    refresh == null && setLoading(true);
    axiosInstance
      .get("/doctor/appointments")
      .then(({ data }: { data: any }) => {
        setAppointments(data?.data);
        setLoading(false);
      })
      .catch(() => {
        setAppointments([]);
        setLoading(false);
      });
  }, [refresh]);
  console.log(appointments);
  return (
    <div className="my-2 p-16   w-[100%] h-[100%]">
      <h1 className="font-[600] text-center text-2xl mb-14">Appointments</h1>
      {loading && (
        <div className="flex justify-center items-center border-red-500 w-[100%] h-[100%]">
          <HashLoader size={150} />{" "}
        </div>
      )}
      {appointments.length === 0 ? (
        <h1 className="text-center text-xl">There is no appointments</h1>
      ) : (
        <Appointments appointments={appointments} setRefresh={setRefresh} />
      )}
    </div>
  );
};

export default ManageAppointments;
