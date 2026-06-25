"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { getPromedioCategoria } from "./../../services/api";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function Page() {

    const [chartData, setChartData] = useState({ labels: [] as string[], datasets: [
            {
                label: "Promedio",
                data: [] as number[],
                borderColor: "rgb(75,192,192)",
                backgroundColor: "rgba(75,192,192,0.2)"
            }
        ]
    });

    useEffect(() => {
        getPromedioCategoria()
            .then((data) => {

                const labels = data.data.map((item: any) => item.categoryCode);
                const promedio = data.data.map((item: any) => item.promedio);
                setChartData({ labels, datasets: [
                        {
                            label: "Promedio",
                            data: promedio,
                            borderColor: "rgb(75,192,192)",
                            backgroundColor: "rgba(75,192,192,0.2)"
                        }
                    ]
                });
            });
    }, []);

    return <Line data={chartData}/>;
}