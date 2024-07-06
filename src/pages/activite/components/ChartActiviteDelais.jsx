import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Janvier',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 'Février',
    uv: 300,
    pv: 138,
    amt: 221,
  },
  {
    name: 'Mars',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'Avril',
    uv: 278,
    pv: 398,
    amt: 200,
  },
  {
    name: 'Mai',
    uv: 180,
    pv: 400,
    amt: 211,
  },
  {
    name: 'Juin',
    uv: 230,
    pv: 380,
    amt: 250,
  },
  {
    name: 'Juillet',
    uv: 340,
    pv: 430,
    amt: 210,
  },
];

export default class ChartActiviteDelais extends PureComponent {

  render() {
    return (
        <ResponsiveContainer >
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}
                content = {
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{marginRight: '10px', color: '#001952'}}>Activités totales</div>
                        <div style={{color: '#03ea68'}}>Activités respectant les délai</div>
                    </div>
                }
            />
            <Bar dataKey="pv" stackId="a" fill="#001952" />
            <Bar dataKey="uv" stackId="a" fill="#03ea68" />
            </BarChart>
        </ResponsiveContainer>

    );
  }
}
