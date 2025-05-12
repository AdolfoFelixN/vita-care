import { useRouter } from "next/navigation";

function Patient({ cita, paciente, medico }) {
    const router = useRouter()
  return (
    <>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">{paciente.Nombre}</p>
        <span
          className={`rounded-full py-1 px-2 text-[10px] flex items-center justify-center ${
            cita.Estado === "Cancelada"
              ? "bg-red-200 text-red-600"
              : "bg-green-300 text-green-700"
          }`}
        >
          {cita.Estado}
        </span>
      </div>
      <div className="text-gray-400 text-sm flex flex-col gap-1">
        <p>Dr. {medico.Nombre}</p>
        <p>{cita.FechaHora}</p>
        <p>14:30</p>
        <p>
          Motivo: <span>{cita.Motivo}</span>
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <button
          type="button"
          className="rounded border border-gray-300 bg-white px-2 py-1 hover:bg-gray-100 cursor-pointer"
        >
          Reprogramar
        </button>
        <button
          type="submit"
          onClick={() => router.push(`/citas/cita/${cita.ID}`)}
          className="rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 cursor-pointer"
        >
          Ver Detalles
        </button>
      </div>
    </>
  );
}

export default Patient;
