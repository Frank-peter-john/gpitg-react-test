import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { useParams } from "react-router-dom";

const PatientDetails = () => {
  const [patientDetails, setPatientDetails] = useState(null);
  const { registrationId } = useParams();

  useEffect(() => {
    axiosClient
      .get(`/patients?Registration_ID=${registrationId}`)
      .then((response) => {
        setPatientDetails(response.data.data[0]); // Assuming the response data is an array and we're interested in the first item
      })
      .catch((error) => {
        console.error("Error fetching patient details:", error);
      });
  }, [registrationId]);

  if (!patientDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(patientDetails).map(([key, value]) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap font-bold">
                  {key.replace(/_/g, " ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDetails;
