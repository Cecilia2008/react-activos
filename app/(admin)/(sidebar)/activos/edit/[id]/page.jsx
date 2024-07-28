'use client'
import React, {useState, useEffect} from 'react'
import ActivosFormCreate from '@/components/activos/ActivosFormCreate'
import { useQuery } from '@apollo/client'
import { GET_ACTIVO, GET_DEPRECIACIONES, GET_MODELOS, GET_PERSONAS, GET_UBICACIONES } from '@/graphql/QuerysSprint'


const ActivosEditPage = ({params}) => {

  const { loading, error, data } = useQuery(GET_ACTIVO, {
    variables: { id: params.id },
  });
  const { data: depreciaciones, error: error1, loading: loading1 } = useQuery(GET_DEPRECIACIONES)
  const { data: modelos, error: error2, loading: loading2 } = useQuery(GET_MODELOS)
  const { data: personas, error: error3, loading: loading3 } = useQuery(GET_PERSONAS)
  const { data: ubicaciones, error: error4, loading: loading4 } = useQuery(GET_UBICACIONES)

  if (loading || loading1 || loading2 || loading3 || loading4) {
    return <p>Loading...</p>;
  }

  // Muestra un mensaje de error si cualquiera de las consultas ha fallado
  if (error || error1 || error2 || error3 || error4) {
    return <p>Error: {error?.message || error1?.message || error2?.message || error3?.message || error4?.message}</p>;
  } else {
    return (
      <ActivosFormCreate data={data.activosById} depreciaciones={depreciaciones.allDepreciaciones} modelos={modelos.allModelos} personas={personas.allPersonas} ubicaciones={ubicaciones.allUbicaciones} />
    //<>{console.log(data.activosById)}</>
    )
  }
}

export default ActivosEditPage