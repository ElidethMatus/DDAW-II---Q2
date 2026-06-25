import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Examen Desarrollo Web II</h1>
      <Link href="/promedioCategoria">Grafica de promedio por categoria</Link>
      <Link href="/conteoMarca">Grafica de cantidad por marca</Link>
    </div>
  );
}