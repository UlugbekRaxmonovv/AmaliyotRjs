import React from 'react';
import './Chart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['Сентябрь 2020','Октябрь 2020', 'Ноябрь 2020', 'Декабрь 2020', 'Январь 2021', 'Февраль 2021', 'Март 2021', 'Апрель 2021', 'Май 2021', 'Июнь 2021','Июль 2021'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Общая доходность ',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 10 })),
            borderColor: 'rgb(53, 162, 235)',
            BiBorderRadius:'50%',
            yAxisID: 'y',
        },
        {
            label: 'Средняя доходность инвесторов',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 10 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

const Chart = () => {
    return (
        <div className='containera'>
            <div className="Chart">
                <div className="Chart_all">
                    <h1>Доходность</h1>
                    <p>Доходность портфеля компании и инвестиционных вкладов«Нурфинанс» в % годовых за последние 11 месяцев</p>

                    <div className="chart">
<div className="chart_row">
    <p> «Нурфинанс» в % годовых за последние 11 месяцев</p>
</div>
<div className="chart_row_p">
    <div className="chart_row_h1">
    <div className="all_chat"></div>
        <h1>Общая доходность</h1>
    </div>
    <div className="chart_row_h1">
    <div className="all_chat"></div>
        <h1>Средняя доходность инвесторов</h1>
    </div>
</div>

                    </div>
                  
                </div>
            </div>
            <div className="Line">
                 <div className="ALL">
                 <Line options={options} data={data} />
                 </div>

                    </div>
        </div>
    );
}

export default Chart;
