import { useState } from "react";
import { SyncLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";

const Appointment = ({
  startTime,
  endTime,
  bookingStartTime,
  bookingEndTime,
  appointmentAction,
  _id,
  setRefresh,
}: {
  startTime: string;
  endTime: string;
  bookingEndTime: string;
  bookingStartTime: string;
  appointmentAction: string;
  _id: string;
  setRefresh: any;
}) => {
  const [loading, setLoading] = useState(false);
  const appointmentHandler = async (action: string) => {
    setLoading(true);
    await axiosInstance[action === "delete" ? "delete" : "patch"](
      `/doctor/appointment/${action}-appointment/${_id}`,
      {}
    )
      .then(({ data }) => {
        data?.status && setRefresh((v: boolean | null) => !v);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
      <button
        className="btn btn-info mt-5 capitalize"
        onClick={() => appointmentHandler(appointmentAction)}
      >
        {loading ? <SyncLoader size={10}></SyncLoader> : appointmentAction}
      </button>
    </div>
  );
};

export default Appointment;
