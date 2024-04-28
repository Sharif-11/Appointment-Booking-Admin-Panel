import { useParams } from "react-router-dom";

const PatientQueue = () => {
  const { appointmentId } = useParams();
  return <div>Patient Queue: {appointmentId}</div>;
};

export default PatientQueue;
