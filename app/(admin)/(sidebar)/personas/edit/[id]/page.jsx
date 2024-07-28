'use client'
import React, {useState, useEffect} from 'react'
import PersonasFormCreate from '@/components/personas/PersonasFormCreate'
import { GET_DEPARTAMENTOS, GET_PERSONA } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'

const loadData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/personas/${id}`)
  const data = await res.json()
  return data
}

const PersonasEditPage = ({params}) => {

  console.log(params.id)
  const { loading: loading2, error: error2, data } = useQuery(GET_PERSONA, {
    variables: { id: params.id },
  });
  const { data: departamentos, error: error1, loading: loading1 } = useQuery(GET_DEPARTAMENTOS);

  if (loading1 || loading2) {
    return <p>Loading...</p>;
    
  }

  // Muestra un mensaje de error si cualquiera de las consultas ha fallado
  if (error1 || error2) {
    return <p>Error: {error1?.message || error2?.message}</p>;
  }
    return (
      <PersonasFormCreate data={data.personaById} departamentos={departamentos.allDepartamentos}/>
      //<>{console.log(data)}</>
    )
  
}

export default PersonasEditPage