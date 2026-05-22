import {useState} from 'react'

export default function Filters({

onFilter

}){

const[
departamento,
setDepartamento
]=useState('')

const[
municipio,
setMunicipio
]=useState('')

const[
muertes,
setMuertes
]=useState('')


async function buscar(){

const data=
await onFilter(

departamento,
municipio,
muertes

)

}


function limpiar(){

setDepartamento('')

setMunicipio('')

setMuertes('')

onFilter(
'',
'',
''
)

}


return(

<div className='filters'>

<input

placeholder='Departamento'

value={departamento}

onChange={(e)=>

setDepartamento(
e.target.value
)

}

/>


<input

placeholder='Ciudad'

value={municipio}

onChange={(e)=>

setMunicipio(
e.target.value
)

}

/>


<input

type='number'

placeholder='Fallecidos mínimos'

value={muertes}

onChange={(e)=>

setMuertes(
e.target.value
)

}

/>


<button
onClick={buscar}
>

Buscar

</button>


<button
onClick={limpiar}
>

Limpiar

</button>


</div>

)

}