const BASE='http://127.0.0.1:8000'


export async function fetchSectores(){

const res=await fetch(
`${BASE}/sectores`
)

return res.json()

}


export async function fetchResumen(){

const res=await fetch(
`${BASE}/resumen`
)

return res.json()

}


export async function fetchDepartamentos(){

const res=await fetch(
`${BASE}/departamentos`
)

return res.json()

}


export async function fetchTopCiudades(){

const res=await fetch(
`${BASE}/top-ciudades`
)

return res.json()

}


export async function fetchFiltro(

departamento,
municipio,
muertes

){

const params=new URLSearchParams()


if(departamento){

params.append(
'departamento',
departamento
)

}


if(municipio){

params.append(
'municipio',
municipio
)

}


if(muertes){

params.append(
'muertes',
muertes
)

}


const res=await fetch(

`${BASE}/filtrar?${params}`

)

return res.json()

}