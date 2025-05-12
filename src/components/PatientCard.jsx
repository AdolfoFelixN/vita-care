"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Patient from "./Patient";

function PatientCard({ cita }) {
  const [patients, setPatients] = useState([]);
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const pacientesRes = await axios.get("/api/pacientes");
      const medicosRes = await axios.get("/api/usuarios");
      setPatients(pacientesRes.data);
      setMedicos(medicosRes.data);
    };
    getData();
  }, []);

  const paciente = patients.find((p) => p.ID === cita.Paciente_ID);
  const medico = medicos.find(m => m.ID === cita.Medico_ID);

  return (
    <form key={cita.ID} className="bg-white rounded p-3 shadow-md mt-2">
      {patients.map((patient) => (
        <div key={patient.ID}>
          {paciente && medico && (
            <Patient cita={cita} paciente={paciente} medico={medico} />
          )}
        </div>
      ))}
    </form>
  );
}

export default PatientCard;
