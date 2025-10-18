import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const data = [{name:'Completed', value:70},{name:'Remaining', value:30}]
const COLORS = ['#6366F1','#14B8A6']

export default function Progress(){
  return (
    <div className="flex items-center gap-6">
      <div className="w-56 h-56 flex items-center justify-center">
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} >
            {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Learning Summary</h4>
        <p className="text-slate-300 mt-2">You are making good progress. Keep completing modules to earn badges.</p>
      </div>
    </div>
  )
}
