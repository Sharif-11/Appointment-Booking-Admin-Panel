import { useEffect, useState } from "react";
import axiosInstance from "../Axios/axios";

const Slot = ({
  startTime,
  endTime,
  bookingStartTime,
  bookingEndTime,
  handlingFunction,
  _id,
}: {
  startTime: string;
  endTime: string;
  bookingEndTime: string;
  bookingStartTime: string;
  handlingFunction: any;
  _id: string;
}) => {
  const [existed, setExisted] = useState(false);
  useEffect(() => {
    const checkAppointment = async () => {
      await axiosInstance.get("/doctor/appointment/" + _id).then(({ data }) => {
        data?.data && setExisted(true);
      });
    };
    checkAppointment();
  }, []);
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
        className="btn btn-info mt-5"
        onClick={handlingFunction}
        disabled={existed}
      >
        {existed ? "Created" : "Create Appointment"}
      </button>
    </div>
  );
};

export default Slot;
