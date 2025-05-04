"use client";
import Table from "@/components/Table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PatienContent() {
  const [pacientes, setPacientes] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const getPatients = async () => {
      try {
        const { data } = await axios.get("/api/pacientes");
        setPacientes(data);
      } catch (error) {
        console.error(error);
        setPacientes([]); // Opcional: aseguras que pacientes quede vacío si falla
      }
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
        <button onClick={() => router.push("/pacientes/new")} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer">
          Nuevo Paciente
        </button>
      </div>
      <div>
        {pacientes.length>0 ? (
            <Table columns={columns} data={pacientes} />
        ): (
            <span className="text-lg text-red-400 font-semibold">No hay pacientes registrados</span>
        )}
      </div>
    </>
  );
}

export default PatienContent;
