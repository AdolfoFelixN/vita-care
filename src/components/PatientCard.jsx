
function PatientCard({cita}) {
  return (
    <form key={cita.ID} className="bg-white rounded p-3 shadow-md mt-2">
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Roberto Martinez</p>
        <span className="rounded-full bg-red-200 text-red-600 p-2 text-xs items-center justify-center">
          {cita.Estado}
        </span>
      </div>
      <div className="text-gray-400 text-sm flex flex-col gap-1">
        <p>Dr. Sofia Torres</p>
        <p>{cita.FechaHora}</p>
        <p>14:30</p>
        <p>
          Motivo: <span>{cita.Motivo}</span>
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <button className="rounded border border-gray-300 bg-white px-2 py-1 hover:bg-gray-100 cursor-pointer">
          Reprogramar
        </button>
        <button className="rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 cursor-pointer">
          Ver Detalles
        </button>
      </div>
    </form>
  );
}

export default PatientCard;
