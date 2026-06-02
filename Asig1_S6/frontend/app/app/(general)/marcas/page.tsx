'use client';
import { getPromedioLinea } from '../../services/api';
import React, { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { PromedioLinea } from '@/app/interfaces/producto';

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

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
            label: 'Promedio Valor',
            data: [] as number[],
            borderColor: 'red',
            backgroundColor: 'red',
            pointRadius: 8,
            borderWidth: 4
        }
        ]
    });

    useEffect(() => {

        getPromedioLinea()
            .then((data) => {

                const labels = data.data.map((item: PromedioLinea) => item.lineCode);
                const promedios = data.data.map((item: PromedioLinea) => item.promedio_valor);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Promedio Valor',
                            data: promedios,
                            borderWidth: 1
                        }
                    ]
                });

            });

    }, []);

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
}