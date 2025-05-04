"use client";
import Table from "@/components/Table";
import axios from "axios";
import { useEffect, useState } from "react";

function PatienContent() {
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
        <Table columns={columns} data={pacientes} />
      </div>
    </>
  );
}

export default PatienContent;
