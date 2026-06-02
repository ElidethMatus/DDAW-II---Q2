'use client';

import { ValorTotalMarca } from '../../interfaces/producto';
import React, { useEffect, useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ValorTotalProducto } from '@/app/interfaces/producto';
import { getValorTotalMarca } from '@/app/services/api';


ChartJS.register(ArcElement, Tooltip, Legend);

export default function Page() {

    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [
            {
                label: 'Valor Total',
                data: [] as number[],
                borderWidth: 1
            }
        ]
    });

    useEffect(() => {

        getValorTotalMarca()
            .then((data) => {

                const labels = data.data.map((item: ValorTotalMarca) => item.brandCode);
                const valores = data.data.map((item: ValorTotalMarca) => item.valor_total);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Valor Total',
                            data: valores,
                            borderWidth: 1
                        }
                    ]
                });

            });

    }, []);

    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
}