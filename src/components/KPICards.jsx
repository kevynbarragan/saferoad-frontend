export default function KPICards({resumen}){

if(!resumen)return null

const cards=[

{
icon:"🚗",
label:"Sectores",
value:resumen.total_sectores
},

{
icon:"⚠️",
label:"Fallecidos",
value:resumen.total_fallecidos
},

{
icon:"📍",
label:"Municipios",
value:resumen.municipios
},

{
icon:"🛣️",
label:"Entidades",
value:resumen.entidades
}

]

return(

<div className="kpi-grid">

{cards.map(c=>(

<div className="kpi-card">

<h1>{c.icon}</h1>

<h2>{c.value}</h2>

<p>{c.label}</p>

</div>

))}

</div>

)

}