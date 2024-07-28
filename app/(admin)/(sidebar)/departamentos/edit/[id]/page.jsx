'use client'
import React, {useState, useEffect} from 'react'
import DepartamentosFormCreate from '@/components/departamentos/DepartamentosFormCreate'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { GET_DEPARTAMENTO, GET_DEPARTAMENTO_X } from '@/graphql/QuerysSprint'

const DepartamentoEditPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_DEPARTAMENTO, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  }

  return (
    <DepartamentosFormCreate data={data.departamentoById}/>
  )
}

export default DepartamentoEditPage