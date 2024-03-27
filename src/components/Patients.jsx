import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axiosClient from "../axiosClient";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [editPatientId, setEditPatientId] = useState(null);
  const [removePatientId, setRemovePatientId] = useState(null);
  const formRef = useRef();
  const [showAddPatientForm, setShowAddPatientForm] = useState(false);
  const [message, setMessage] = useState(null);

  let counter = 1;

  // Fetch all patients from the API
  useEffect(() => {
    axiosClient
      .get("/patients")
      .then((response) => {
        setPatients(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching patient details:", error);
      });
  }, []);

  const handleEdit = (patientId) => {
    setEditPatientId(patientId);
  };

  const handleRemove = (patientId) => {
    setRemovePatientId(patientId);
  };

  return (
    <div className="container mx-auto mt-8 text-[15px]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">List of patients</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md ">
          <thead>
            <tr>
              <th className="border bg-gray-200 px-4 py-2">No</th>
              <th className="border bg-gray-200 px-4 py-2">Patient name</th>
              <th className="border bg-gray-200 px-4 py-2">Patient Number</th>
              <th className="border bg-gray-200 px-4 py-2">Guarantor name</th>
              <th className="border bg-gray-200 px-4 py-2">Date of Birth</th>
              <th className="border bg-gray-200 px-4 py-2">Ward</th>
              <th className="border bg-gray-200 px-4 py-2">Region</th>
              <th className="border bg-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="border px-4 py-2">{counter++}</td>
                <td className="border px-4 py-2 cursor-pointer">
                  {/* Link to PatientDetails */}
                  <Link to={`/patient-details/${patient.Registration_ID}`}>
                    {patient.Patient_Name}
                  </Link>
                </td>
                <td className="border px-4 py-2">{patient.Phone_Number}</td>
                <td className="border px-4 py-2 text-justify">
                  {patient.guarantor_name ? patient.guarantor_name : "Null"}
                </td>

                <td className="border px-4 py-2">{patient.Date_Of_Birth}</td>
                <td className="border px-4 py-2 text-justify">
                  {patient.Ward}
                </td>
                <td className="border px-4 py-2 text-justify">
                  {patient.Region}
                </td>

                <td className="border px-4 py-2">
                  <button
                    className="text-blue-700 hover:text-blue-500 mr-5"
                    onClick={() => handleEdit(patient.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-primary hover:text-red-500  rounded-md"
                    onClick={() => handleRemove(patient.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
