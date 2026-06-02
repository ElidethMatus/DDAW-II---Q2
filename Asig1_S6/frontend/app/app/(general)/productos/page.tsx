'use client';

import { getValorTotalProducto } from '../../services/api';
import { ValorTotalProducto } from '../../interfaces/producto';
import React, { useEffect, useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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

        getValorTotalProducto()
            .then((data) => {

                const labels = data.data.map((item: ValorTotalProducto) => item.productType);
                const valores = data.data.map((item: ValorTotalProducto) => item.valor_total);

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