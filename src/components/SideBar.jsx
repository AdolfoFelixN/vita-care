import { MdMenu, MdSettings, MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { useStore } from "@/store";
function SideBar() {
  const { sidebar, toggleSidebar } = useStore();

  return (
    <div className="bg-white h-svh border-r-1 border-r-gray-200">
      <div className="flex items-center justify-between py-3 px-2">
        <h1 className={`text-blue-400 font-bold text-xl ${sidebar ? "" : "hidden"}`}>Vita Care</h1>
        <MdMenu
          onClick={toggleSidebar}
          className="text-xl font-bold cursor-pointer"
        />
      </div>
      <hr className="text-gray-200" />
      <ul className="p-2 flex flex-col gap-2">
        <li className="flex items-center gap-2 p-2 rounded-xs hover:bg-blue-500 hover:text-white cursor-pointer">
          <span>
            <MdSettings className="font-bold" />
          </span>
          Dashboard
        </li>
        <li className="flex items-center gap-2 p-2 rounded-xs hover:bg-blue-500 hover:text-white cursor-pointer text-white bg-blue-500">
          <span>
            <FaUser className="font-bold" />
          </span>
          Pacientes
        </li>
        <li className="flex items-center gap-2 p-2 rounded-xs hover:bg-blue-500 hover:text-white cursor-pointer">
          <span>
            <MdOutlineDateRange className="font-bold" />
          </span>
          Citas
        </li>
        <li className="flex items-center gap-2 p-2 rounded-xs hover:bg-blue-500 hover:text-white cursor-pointer">
          <span>
            <GrDocumentText className="font-bold" />
          </span>
          Expedientes
        </li>
        <li className="flex items-center gap-2 p-2 rounded-xs hover:bg-blue-500 hover:text-white cursor-pointer">
          <span>
            <GrDocumentText className="font-bold" />
          </span>
          Recetas
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
