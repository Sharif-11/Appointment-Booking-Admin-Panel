import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";

const Appointment = ({
  startTime,
  endTime,
  bookingStartTime,
  bookingEndTime,
  appointmentAction,
  _id,
  status,
  setRefresh,
}: {
  startTime: string;
  endTime: string;
  bookingEndTime: string;
  bookingStartTime: string;
  appointmentAction: string;
  status: string;
  _id: string;
  setRefresh: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const appointmentHandler = async (action: string) => {
    setLoading(true);
    setMessage("");
    await axiosInstance[action === "delete" ? "delete" : "patch"](
      `/doctor/appointment/${action}-appointment/${_id}`,
      {}
    )
      .then(({ data }) => {
        data?.status && setRefresh((v: boolean | null) => !v);
        setMessage(data?.message);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setMessage(err?.response?.data?.message);
      });
  };
  return (
    <div className="card my-3 shadow-xl w-[40%] p-8">
      <p className="font-[700] text-lg">Service Time</p>
      <p className="text-md text-[green]  italic">
        {startTime} - {endTime}
      </p>
      <p className="font-[700] text-lg">Booking Time</p>
      <p className="text-md italic text-[green]">
        {bookingStartTime} - {bookingEndTime}
      </p>
      {status === "running" ? (
        <button
          className="btn btn-info mt-5 capitalize"
          onClick={() => navigate(`/patient-queue/${_id}`)}
        >
          View Patient Queue
        </button>
      ) : (
        <button
          className="btn btn-info mt-5 capitalize"
          onClick={() => appointmentHandler(appointmentAction)}
          disabled={appointmentAction == null}
        >
          {loading ? (
            <SyncLoader size={10}></SyncLoader>
          ) : appointmentAction == null ? (
            status
          ) : (
            appointmentAction
          )}
        </button>
      )}
      <p className="mx-auto text-xs mt-2 text-red-500">{message}</p>
    </div>
  );
};

export default Appointment;
