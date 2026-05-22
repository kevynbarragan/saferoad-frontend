import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid,
Cell

}
from 'recharts'


const COLORS=[

'#4361EE',
'#3A86FF',
'#4895EF',
'#4CC9F0',
'#7209B7',
'#8338EC',
'#B5179E',
'#2EC4B6',
'#06D6A0',
'#48CAE4'

]


export default function TopCiudades({data}){


if(!data?.length)
return <p>Cargando...</p>


return(

<div className='chart-container'>

<p className='chart-context'>

Concentración urbana

</p>


<h3>

Ciudades con mayor riesgo vial

</h3>


<ResponsiveContainer
width='100%'
height={350}
>

<BarChart

layout='vertical'

data={data}

margin={{
top:10,
right:20,
left:20,
bottom:5
}}

>

<CartesianGrid
strokeDasharray="3 3"
/>

<XAxis type='number'/>

<YAxis

type='category'

dataKey='ciudad'

width={120}

/>

<Tooltip

formatter={(v)=>
[`${v} sectores`]
}

/>

<Bar

dataKey='total'

radius={[0,12,12,0]}

>

{data.map((_,i)=>(

<Cell

key={i}

fill={
COLORS[
i%COLORS.length
]
}

/>

))}

</Bar>

</BarChart>

</ResponsiveContainer>

</div>

)

}