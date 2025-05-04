"use client";

import Table from "@/components/Table";
import axios from "axios";
import { useEffect, useState } from "react";

function PacientesPage() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const { data } = await axios.get("/api/pacientes");
      setPacientes(data);
    };
    getPatients();
  }, []);

  console.log(pacientes);

  const columns = [
    { header: "Nombre", key: "Nombre" },
    { header: "Fecha de nacimiento", key: "FechaNacimiento" },
    { header: "Sexo", key: "Sexo" },
    { header: "Teléfono", key: "Telefono" },
    { header: "Email", key: "Email" },
    { header: "Dirección", key: "Direccion" },
    { header: "Alergias", key: "Alergias" },
    { header: "Acciones", key: "Acciones" }, // puedes dejar vacío por ahora
  ];
  

  return (
    <>
      <h1 className="text-3xl font-bold">Pacientes</h1>
      <div className="flex justify-between my-4">
        <input
          type="text"
          name="search"
          placeholder="Buscar pacientes..."
          className="border border-gray-300 rounded px-2 text-sm w-1/3"
        />
        <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer">
          Nuevo Paciente
        </button>
      </div>
      <div>
        {/* <table className="text-sm font-normal">
          <thead>
            <tr className="text-gray-200 bg-gray-500">
              <th className="text-start p-2">Nombre</th>
              <th className="text-start p-2">Fecha Nacimiento</th>
              <th className="text-start p-2">Sexo</th>
              <th className="text-start p-2">Teléfono</th>
              <th className="text-start p-2">Email</th>
              <th className="text-start p-2">Dirección</th>
              <th className="text-start p-2">Alergias</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
                <tr key={paciente.ID}>
                <td>{paciente.Nombre}</td>
                <td>{paciente.FechaNacimiento}</td>
                <td>{paciente.Sexo}</td>
                <td>{paciente.Telefono}</td>
                <td>{paciente.Email}</td>
                <td>{paciente.Direccion}</td>
                <td>{paciente.Alergias}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <Table columns={columns} data={pacientes}/>
      </div>
    </>
  );
}

export default PacientesPage;
