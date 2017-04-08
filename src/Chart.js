import React, { Component } from 'react';
import * as firebase from 'firebase'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const COLORS = [
    '#0088FE', // Blue
    '#00C49F', // Green
    '#FFBB28', // Yellow
    '#FF8042', // Orange
    '#8884d8', // Purple
    '#f918f9', // Pink
    '#000000', // Black
];

class SimpleLineChart extends Component {

    constructor() {
        super();
        this.state = {
            lines: [],
            data: null,
        };
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        const betsRef = dbRef.child('bets');

        betsRef.on('value', (snapshot) => {
            var data = []
            var unique_names = new Set();
            snapshot.forEach((childSnapshot) => {
                var year = childSnapshot.key;
                var names = childSnapshot.val();
                // Merge two dict
                var sub_data = Object.assign({"year":year}, names)

                for (var name in names) {
                    unique_names.add(name)
                }

                data.push(sub_data)
            });

            // Set the state with data
            this.setState({
                // Convert set to list
                lines: [...unique_names].map((name, i) => {
                    if (name === "Master")
                        return <Line key={name} type="monotone" dataKey={name} stroke={COLORS[i]} activeDot={{r: 7}} />
                    else
                        return <Line key={name} type="monotone" dataKey={name} stroke={COLORS[i]} />
                    }),
                data: data,
            });
        });
    };

    render () {
    return (
        <LineChart width={1000} height={500} data={this.state.data} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
        <XAxis dataKey="year"/>
        <YAxis domain={['dataMin - 5', 'dataMax + 5']}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        {this.state.lines}
        </LineChart>
    );
  }
}

export default SimpleLineChart;