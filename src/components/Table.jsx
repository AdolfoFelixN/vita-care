import { MdModeEditOutline, MdDelete } from "react-icons/md";
import DeletePatientButton from "./DeletePatient";
function Table({ columns, data }) {
  return (
    <table className="text-sm font-normal w-full">
      <thead>
        <tr className="text-gray-200 bg-gray-500">
          {columns.map((col) => (
            <th
              key={col.key}
              className={`${
                col.key === "Acciones" ? "text-center" : "text-start"
              } p-2`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-300">
            {columns.map((col) => (
              <td key={col.key} className="p-2 border border-y-gray-300 border-x-0">
                {col.key === "Acciones" ? (
                  <div className="flex gap-2 items-center justify-center">
                    <a
                      href={`/pacientes/edit/${row.ID}`}
                      className="bg-blue-500 p-1 text-white hover:bg-blue-600 cursor-pointer rounded inline-flex"
                    >
                      <MdModeEditOutline />
                    </a>
                    <DeletePatientButton id={row.ID} />
                  </div>
                ) : (
                  row[col.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
