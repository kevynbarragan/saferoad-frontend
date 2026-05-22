import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from 'recharts'


export default function Grafico({data}){

return(

<ResponsiveContainer
width="100%"
height={400}
>

<BarChart data={data}>

<XAxis dataKey="Departamento"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="total"/>

</BarChart>

</ResponsiveContainer>

)

}