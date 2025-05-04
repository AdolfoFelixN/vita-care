"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

function DeletePatientButton({ id }) {

    const router = useRouter()

  const handleDeletePatient = async () => {
    try {
      const result = await axios.delete(`/api/pacientes/${id}`);
      
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDeletePatient}
      className="bg-red-500 p-1 text-white hover:bg-red-600 cursor-pointer rounded inline-flex"
    >
      <MdDelete />
    </button>
  );
}

export default DeletePatientButton;
