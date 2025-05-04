"use client";
import axios from "axios";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/pacientes", data);
      console.log(response.data);
      console.log("Registro exitoso")
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div className="flex w-full h-svh justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 flex flex-col gap-3 text-sm bg-white p-4 rounded-sm shadow-md shadow-blue-100"
      >
        <div className="flex flex-col">
          <label htmlFor="Nombre">Nombre completo:</label>
          <input
            id="Nombre"
            type="text"
            placeholder="Nombre del paciente..."
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Nombre", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              minLength: {
                value: 10,
                message: "El nombre es muy corto, mínimo 10 caracteres",
              },
            })}
          />
          {errors.Nombre && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.Nombre.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="FechaNacimiento">Fecha de Nacimiento:</label>
          <input
            id="FechaNacimiento"
            type="date"
            placeholder="10/04/2002"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("FechaNacimiento", {
              required: {
                value: true,
                message: "La Fecha es requerida",
              },
            })}
          />
          {errors.FechaNacimiento && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.FechaNacimiento.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Sexo">Sexo:</label>
          <select
            id="Sexo"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Sexo", {
              required: true,
            })}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          {errors.Sexo && (
            <span className="text-xs text-red-500 font-semibold">
              El sexo es requerido
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Telefono">Teléfono:</label>
          <input
            id="Telefono"
            type="number"
            placeholder="811382812"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Telefono", {
              required: {
                value: true,
                message: "El Teléfono es requerido",
              },
              minLength: {
                value: 8,
                message: "Mínimo 8 numeros",
              },
              maxLength: {
                value: 10,
                message: "Máximo 10 numeros",
              },
            })}
          />
          {errors.Telefono && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.Telefono.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            type="text"
            placeholder="paciente@gmail.com"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Email", {
              required: {
                value: true,
                message: "El email es requerido",
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Correo inválido",
              },
            })}
          />
          {errors.Email && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.Email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Direccion">Dirección:</label>
          <textarea
            rows={4}
            name="Direccion"
            id="Direccion"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Direccion", {
              required: {
                value: true,
                message: "La dirección es requerida",
              },
            })}
          />
          {errors.Direccion && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.Direccion.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Alergias">Alergias:</label>
          <textarea
            rows={4}
            name="Alergias"
            id="Alergias"
            className="border border-gray-300 rounded py-1 px-2"
            {...register("Alergias", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {errors.Alergias && (
            <span className="text-xs text-red-500 font-semibold">
              {errors.Alergias.message}
            </span>
          )}
        </div>
        <div className="text-white flex justify-around items-center">
          <button
            type="button"
            className="bg-red-500 py-2 px-4 rounded-sm cursor-pointer hover:bg-red-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 py-2 px-4 rounded-sm cursor-pointer hover:bg-blue-600"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
