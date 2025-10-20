import React from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts";


const RatingChart=({ratings})=> {
    
  return (
    <div className="chart">
      <h3 className="text-left text-[#001931] text-2xl font-semibold">Ratings</h3>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={ratings}
        layout="vertical"               
      >
        <YAxis type="category" dataKey="name" reversed tickLine={false} axisLine={false} tickMargin={16} />  
        <XAxis type="number" tickLine={false} axisLine={false} />         
        <Tooltip />
        <Bar dataKey="count" fill="#F81" barSize={32}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}


export default RatingChart;