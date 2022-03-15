import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'right',
			align: 'end',
		},
		title: {
			display: true,
			text: 'Sales',
		},
		datalabels: {
			formatter: (value, context) => {
				const dataValues = context.dataset.data;

				const initialValue = 1200;
				const dataValuesSum = dataValues.reduce(
					(previousValue, currentValue) =>
						previousValue + currentValue,
					initialValue
				);
				const dataValuesPercentage = (
					(value / dataValuesSum) *
					100
				).toFixed(1);
				const displayDataValues = [
					`${value}`,
					`${dataValuesPercentage}%`,
				];
				return displayDataValues;
			},
		},
	},
};

export const data = {
	labels: [
		'1970-1979',
		'1980-1989',
		'1990-1999',
		'2000-2009',
		'2010-2019',
		'2020-2029',
	],
	datasets: [
		{
			label: '# of Votes',
			data: [1200, 1900, 3034, 5003, 2709, 3010],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

const PieChart = () => {
	return <Pie options={options} data={data} plugins={[ChartDataLabels]} />;
};

export default PieChart;
