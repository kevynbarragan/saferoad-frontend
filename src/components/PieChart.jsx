import{

PieChart,
Pie,
Tooltip

} from 'recharts'


export default function Circular({data}){

return(

<PieChart width={400} height={400}>

<Pie

data={data}

dataKey="total"

nameKey="entidad"

/>

<Tooltip/>

</PieChart>

)

}