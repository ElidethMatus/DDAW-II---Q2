'use client'
import { useTarea } from '../providers/provTarea';

export default function TablaTareas() {

    const { tareas, cambiarEstado } = useTarea();

    return (
        <table>
            <thead>

                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead>

            <tbody>
                {tareas.map((tarea) => (
                    <tr key={tarea.id}>
                        <td>{tarea.id}</td>
                        <td>{tarea.titulo}</td>
                        <td>{tarea.descripcion}</td>
                        <td>{tarea.estado}</td>

                        <td>
                            <input
                            type="button"
                            value="Cambiar"
                            onClick={() => cambiarEstado(tarea.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}