import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 p-8">

            <Link href="/productos"> Valor Total por Tipo de Producto </Link>
            <Link href="/promedioProd"> Valor Total por Marca </Link>
            <Link href="/marcas"> Promedio por Línea </Link>

        </div>
    );
}