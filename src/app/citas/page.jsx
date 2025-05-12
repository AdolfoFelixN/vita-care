"use client"

import PatientCard from "@/components/PatientCard"
import axios from "axios"
import { useEffect, useState } from "react"

function CitasPage() {

    const [citas, setCitas] = useState([])
    const [medicos, setMedicos] = useState([])

    useEffect(() => {
        const getData = async () => {
            const citasRes = await axios.get('/api/citas')
            setCitas(citasRes.data)
            const medicosRes = await axios.get('/api/usuarios')
            setMedicos(medicosRes.data)
        }
        getData()
    }, [])

    console.log(citas)

  return (
   <>
      <h1 className="text-3xl font-bold">Agenda de Consultas</h1>
      <div className='grid grid-cols-[25%_75%] mt-8'>
        <form className='p-4 shadow-md rounded bg-white flex flex-col gap-2'>
            <h2 className='font-semibold text-lg'>Filtros</h2>
            <div className='flex flex-col'>
                <label htmlFor="search" className='text-gray-500'>Buscar</label>
                <input type="text" placeholder='Buscar citas...' className='rounded border border-gray-400 text-gray-500 p-2'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="date" className='text-gray-500'>Fecha</label>
                <input type='date' placeholder='Buscar citas...' className='rounded border border-gray-400 text-gray-500 p-2'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="doctor" className='text-gray-500'>Doctor</label>
                <select name="" id="" className='rounded border border-gray-400 text-gray-500 p-2'>
                    <option value="">Todos los doctores</option>
                    <option value="">Doctor 1</option>
                    {medicos.map((medico)=> (
                        <option key={medico.ID} value={medico.ID}>{medico.Nombre}</option>
                    ))}
                </select>
            </div>
            <button type='submit' className='bg-blue-500 mt-2 text-white rounded px-3 py-2 cursor-pointer hover:bg-blue-600'>Nueva cita</button>
        </form>
        <div className="px-5 grid grid-cols-2 gap-5">
            {citas.map((cita) => (
                <PatientCard key={cita.ID} cita={cita}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default CitasPage