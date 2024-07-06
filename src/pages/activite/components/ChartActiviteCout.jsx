// import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#00FF00', '#001952', '#FFBB28', '#ff0000'];
const data = [
  { name: 'Cout respecté, délai respecté', 
    cout: true,
    delai: true,
    value: 400 
    },
    { name: 'Cout respecté, délai non respecté', 
        cout: true,
        delai: false,
        value: 300 

    },
    { name: 'Cout non respecté, délai respecté', 
        cout: false,
        delai: true,
        value: 300 

    },
    { name: 'Cout non respecté, délai non respecté',
        cout: false,
        delai: false, 
        value: 200 

    },
];

import React, {useState} from 'react';

const ChartActiviteCout = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Legend verticalAlign="bottom" height={36}
                content = {
                    <p className="text-primaire fond-semibold mx-12">Catégorisation des activités par le respect des délai et par le respect des couts</p>
                }
            />
          {/* <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#001952"
            dataKey="value"
            onMouseEnter={onPieEnter}
          /> */}
          <Pie
           activeIndex={activeIndex}
           activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#001952"
          paddingAngle={5}
          dataKey="value"
          onMouseEnter={onPieEnter}

        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        </PieChart>
      </ResponsiveContainer>
    );
}

export default ChartActiviteCout;


const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
        <g>
            
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={"#03ea68"}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={"#03ea68"} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={"#03ea68"} stroke="none" />
            <text className="text-xs" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#03ea68">{`activités ${value}`}</text>
            
            <text className="text-xs" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
            
            <text className="text-xs" x={cx} y={cy} dy={-15} textAnchor="middle" fill={fill}>
                {payload.cout ? "Cout : respecté" : "Cout : non respecté"}
            </text>
            <text className="text-xs" x={cx} y={cy} dy={5} textAnchor="middle" fill={fill}>
                {payload.delai ? "Délai : respecté" : "Délai : non respecté"}
            </text>
            <text className="text-xs" x={cx} y={cy} dy={25} textAnchor="middle" fill={fill}>
                {`nombre: ${value}`}
            </text>
        </g>
    );
};
  