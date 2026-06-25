"use client";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { getCantidadMarca } from "./../../services/api";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function Page() {
    const [chartData, setChartData] = useState({ labels: [] as string[], datasets: [
            { label: "Cantidad", data: [] as number[] }
        ]
    });

    useEffect(() => {

        getCantidadMarca()
            .then((data) => {

                const labels = data.data.map((item: any) => item.brandCode);
                const cantidad = data.data.map((item: any) => item.cantidad);
                setChartData({ labels, datasets: [
                        { label: "Cantidad", data: cantidad }
                    ]
                });
            });
    }, []);

    return (
  <div
    style={{
      width: "600px",
      height: "600px",
      margin: "40px auto",
    }}>
    <Pie
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}/>
  </div>
);
}