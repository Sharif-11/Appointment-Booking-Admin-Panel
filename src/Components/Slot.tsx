import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";

const Slot = ({
  startTime,
  endTime,
  bookingStartTime,
  bookingEndTime,
  _id,
}: {
  startTime: string;
  endTime: string;
  bookingEndTime: string;
  bookingStartTime: string;
  _id: string;
}) => {
  const [existed, setExisted] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const checkAppointment = async () => {
      await axiosInstance
        .get("/doctor/appointment/" + _id)
        .then(({ data }) => {
          data?.data ? setExisted(true) : setExisted(false);
        })
        .catch(() => {
          setExisted(false);
        });
    };
    checkAppointment();
  }, [reload]);
  const createAppointment = async () => {
    setLoading(true);
    await axiosInstance
      .post("/doctor/appointment", { slotId: _id })
      .then(({ data }) => {
        if (data.status) {
          setLoading(false);
          setReload((v) => !v);
        }
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
        className="btn btn-info mt-5"
        onClick={createAppointment}
        disabled={existed == null ? true : existed}
      >
        {loading ? (
          <SyncLoader size={10}></SyncLoader>
        ) : existed ? (
          "Created"
        ) : (
          "Create Appointment"
        )}
      </button>
    </div>
  );
};

export default Slot;
