import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";
import Slots from "./Slots";
const CreateAppointment = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/doctor/slots")
      .then(({ data }) => (data.status ? setSlots(data.data) : setSlots([])))
      .catch(() => setSlots([]));
    setLoading(false);
  }, []);
  const createAppointment = async (id: string) => {
    await axiosInstance
      .post("/doctor/appointment", { slotId: id })
      .then(({ data }) => {
        if (data.status) {
        }
      });
  };
  return (
    <div>
      <p className="text-center font-[700] text-xl my-16">
        Slots Available today
      </p>
      {loading ? (
        <HashLoader size={100}></HashLoader>
      ) : (
        <Slots slots={slots} handlingFunction={createAppointment} />
      )}
    </div>
  );
};

export default CreateAppointment;
