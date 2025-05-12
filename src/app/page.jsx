import CardDashboard from "@/components/CardDashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Panel Administrativo</h1>
      <div className="my-5 flex flex-col gap-2">
        <span>
          {new Date().toLocaleDateString("es-MX", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <h2 className="font-semibold text-blue-500 text-2xl">
          Panel de Control
        </h2>
      </div>
      <main className="">
        <div className="grid grid-cols-4 gap-5">
          <CardDashboard title="Total de Pacientes" quantity={58}/>
          <CardDashboard title="Citas Totales" quantity={145}/>
          <CardDashboard title="Citas Completadas" quantity={98}/>
          <CardDashboard title="Expedientes" quantity={58}/>
        </div>
      </main>
    </div>
  );
}
