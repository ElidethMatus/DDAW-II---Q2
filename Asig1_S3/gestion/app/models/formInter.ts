export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    estado: "Pendiente" | "En Proceso" | "Completada";
}