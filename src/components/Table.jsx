import { MdModeEditOutline } from "react-icons/md";
function Table({ columns, data }) {
  return (
    <table className="text-sm font-normal w-full">
      <thead>
        <tr className="text-gray-200 bg-gray-500">
          {columns.map((col) => (
            <th key={col.key} className="text-start p-2">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-300">
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {row[col.key] ||
                  (col.key === "Acciones" ? (
                    // <button className="bg-blue-500 p-1 text-white hover:bg-blue-600 cursor-pointer rounded"><MdModeEditOutline /></button>
                    <a
                      href={`/pacientes/edit/${row.ID}`}
                      className="bg-blue-500 p-1 text-white hover:bg-blue-600 cursor-pointer rounded inline-flex"
                    >
                      <MdModeEditOutline />
                    </a>
                  ) : (
                    ""
                  ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
