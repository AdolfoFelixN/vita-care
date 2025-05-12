import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Patient from "./Patient";

function PatientCard({ cita }) {
  const [patients, setPatients] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const router = useRouter();

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
  const medico = medicos.find((m) => m.ID === cita.Medico_ID);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div key={cita.ID} className="bg-white rounded p-3 shadow-md mt-2">
      {paciente && medico && (
        <form onSubmit={handleSubmit}>
          <Patient cita={cita} paciente={paciente} medico={medico} />
        </form>
      )}
    </div>
  );
}

export default PatientCard;
