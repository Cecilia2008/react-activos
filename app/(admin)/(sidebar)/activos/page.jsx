'use client'
import React, {useState, useEffect} from 'react'
import ActivosTable from '@/components/activos/ActivosTable'
import { GET_ACTIVOS } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const ActivosPage = () => {

  const { data, error, loading } = useQuery(GET_ACTIVOS);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <ActivosTable users={data.allActivos}/>
      // <>
      // {
      //   console.log(data.allActivos)
      // }
      // </>
    )
  }
}

export default ActivosPage