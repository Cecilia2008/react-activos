'use client'
import React from 'react'
import PersonasFormCreate from '@/components/personas/PersonasFormCreate'
import { GET_DEPARTAMENTOS } from '@/graphql/QuerysSprint';
import { useQuery } from '@apollo/client';

const PersonasCreatePage = () => {
  const { data: departamentos, error: error1, loading: loading1 } = useQuery(GET_DEPARTAMENTOS);

  if (loading1) {
    return <p>Loading...</p>;
  }

  // Muestra un mensaje de error si cualquiera de las consultas ha fallado
  if (error1) {
    return <p>Error: {error1?.message}</p>;
  }
  return (
    <PersonasFormCreate departamentos={departamentos.allDepartamentos}/>
  )
}

export default PersonasCreatePage