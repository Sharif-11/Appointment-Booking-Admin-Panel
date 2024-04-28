import Appointment from "./Appointment";

const Appointments = ({
  appointments,
  setRefresh,
}: {
  appointments: any[];
  setRefresh: any;
}) => {
  return (
    <div>
      <div className="flex justify-around flex-wrap mx-8">
        {appointments.map((appointment, idx) => (
          <Appointment id={idx} {...appointment} setRefresh={setRefresh} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
