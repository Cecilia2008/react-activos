'use client'
import React, {useState, useEffect} from 'react'
import DepreciacionesFormCreate from '@/components/depreciaciones/DepreciacionesFormCreate'
import { useQuery } from '@apollo/client'
import { GET_DEPRECIACION } from '@/graphql/QuerysSprint'


const DepreciacionEditPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_DEPRECIACION, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <DepreciacionesFormCreate data={data.depreciacionById}/>
    )
  }
}

export default DepreciacionEditPage