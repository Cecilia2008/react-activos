'use client'
import React, {useState, useEffect} from 'react'
import FabricantesFormCreate from '../../../../components/fabricantes/FabricantesFormCreate'
import { useQuery } from '@apollo/client'
import { GET_FABRICANTE } from '@/graphql/QuerysSprint'


const FabricantesEditPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_FABRICANTE, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <FabricantesFormCreate data={data.fabricanteById}/>
    )
  }
}

export default FabricantesEditPage