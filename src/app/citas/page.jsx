import React from 'react'

function CitasPage() {
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
                </select>
            </div>
            <button type='submit' className='bg-blue-500 mt-2 text-white rounded px-3 py-2 cursor-pointer hover:bg-blue-600'>Nueva cita</button>
        </form>
      </div>
    </>
  )
}

export default CitasPage