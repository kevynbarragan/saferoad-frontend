import { useEffect, useState } from 'react'

import Header from './components/Header'
import KPICards from './components/KPICards'
import Grafico from './components/BarChart'
import TopCiudades from './components/TopCiudades'
import Filters from './components/Filters'

import {
  fetchResumen,
  fetchDepartamentos,
  fetchTopCiudades,
  fetchFiltro
} from './services/api'


function App(){

const [resumen,setResumen]=useState()

const [departamentos,setDepartamentos]=useState([])

const [ciudades,setCiudades]=useState([])

const [sectores,setSectores]=useState([])


useEffect(()=>{

cargar()

},[])



async function cargar(){

try{

setResumen(
await fetchResumen()
)

setDepartamentos(
await fetchDepartamentos()
)

setCiudades(
await fetchTopCiudades()
)

setSectores(
await fetchFiltro(
'',
'',
''
)
)

}
catch(error){

console.log(error)

}

}



async function aplicarFiltro(

departamento,
municipio,
muertes

){

const data=

await fetchFiltro(

departamento,
municipio,
muertes

)

setSectores(data)

}



return(

<div className='app'>

<Header/>

<div className='main'>

<KPICards
resumen={resumen}
/>


<div className='charts-grid'>

<Grafico
data={departamentos}
/>

<TopCiudades
data={ciudades}
/>

</div>


<section className='section'>

<h2>

Explorar datos

</h2>

<Filters
onFilter={aplicarFiltro}
/>


<div className='table-container'>

<h3>

Registros:
{sectores.length}

</h3>


<table>

<thead>

<tr>

<th>Municipio</th>

<th>Departamento</th>

<th>Fallecidos</th>

<th>Entidad</th>

</tr>

</thead>


<tbody>

{sectores.map((s,i)=>(

<tr key={i}>

<td>{s.Municipio}</td>

<td>{s.Departamento}</td>

<td>{s.Fallecidos}</td>

<td>{s.ENTIDAD}</td>

</tr>

))}

</tbody>

</table>

</div>

</section>

</div>

</div>

)

}

export default App