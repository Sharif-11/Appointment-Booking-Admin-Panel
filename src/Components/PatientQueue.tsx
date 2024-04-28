import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import axiosInstance from "../Axios/axios";
import { calculateAge } from "../utils/time.utils";

const PatientQueue = () => {
  const { appointmentId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/doctor/patient-queue/${appointmentId}`)
      .then(({ data }) => {
        setBookings(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="my-4 text-center text-2xl">Patient Queue</h1>
      <div className="overflow-x-auto rounded-md">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-center">Name</th>
              <th className="px-4 py-3 text-center">Email</th>
              <th className="px-4 py-3 text-center">Age</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          {loading ? (
            <tr>
              <td rowSpan={4} className="border-red-800 mx-auto">
                {" "}
                <HashLoader size={50} />
              </td>
            </tr>
          ) : (
            <tbody>
              {bookings?.map(
                ({ name, email, serviceStatus, dateOfBirth }, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
                  >
                    <td className="px-4 py-2 text-center">{name}</td>
                    <td className="px-4 py-2 text-center">{email}</td>
                    <td className="px-4 py-2 text-center">
                      {calculateAge(dateOfBirth) + "y"}
                    </td>
                    <td className="px-4 py-2 text-center capitalize">
                      <button
                        className="btn btn-sm btn-success btn-outline mt-1 capitalize text-xs"
                        disabled={serviceStatus === "served"}
                      >
                        {serviceStatus}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default PatientQueue;
