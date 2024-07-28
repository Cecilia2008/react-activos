'use client'
import React, {useState, useEffect} from 'react'
import DepartamentosTable from '@/components/departamentos/DepartamentosTable'
import { useQuery } from '@apollo/client'
import { GET_DEPARTAMENTOS } from '@/graphql/QuerysSprint'


const DepartamentoPage = () => {

  const { data, error, loading } = useQuery(GET_DEPARTAMENTOS);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <DepartamentosTable users={data.allDepartamentos}/>
    )
  }
  
}

export default DepartamentoPage