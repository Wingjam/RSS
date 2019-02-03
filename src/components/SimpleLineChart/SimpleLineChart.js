import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './SimpleLineChart.css'

const COLORS = [
    '#0088FE', // Blue
    '#00C49F', // Green
    '#FFBB28', // Yellow
    '#FF8042', // Orange
    '#8884d8', // Purple
    '#f918f9', // Pink
    '#000000', // Black
];

// Bets sample (order by year)
// {
//     "Conrad": 32,
//     "Geneviève": 36,
//     "Isabelle": 31,
//     "Jonathan": 35,
//     "Josianne": 30,
//     "Maryse": 34,
//     "Master": 41,
//     "year": 2013,
// }

const SimpleLineChart = ({ bets }) => {
    if (bets.length !== 0) {
        // Get the names of the last year
        var names = Object.keys(bets[bets.length - 1])

        var lines = names.map((name, i) => {
            if (name === "year")
                return null
            else if (name === "Master")
                return <Line key={name} type="monotone" dataKey={name} stroke={COLORS[i]} strokeWidth={1.75} activeDot={{ r: 6 }} />
            else
                return <Line key={name} type="monotone" dataKey={name} stroke={COLORS[i]} strokeWidth={1.5} />
        })
    }

    return (
        <ResponsiveContainer aspect={1.5} maxHeight={500} className={"simple-line-chart-container"}>
            <LineChart data={bets}>
                <XAxis dataKey="year" />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                {lines}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default (SimpleLineChart)