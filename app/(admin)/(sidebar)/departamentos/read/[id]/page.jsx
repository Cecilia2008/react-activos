'use client'
import React, {useState, useEffect} from 'react'
import DepartamentosView from '@/components/departamentos/DepartamentosView'
import { useQuery } from '@apollo/client'
import { GET_DEPARTAMENTO } from '@/graphql/QuerysSprint'


const DepartamentosReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_DEPARTAMENTO, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  }

  return (
    <DepartamentosView data={data.departamentoById}/>
  )
}

export default DepartamentosReadPage