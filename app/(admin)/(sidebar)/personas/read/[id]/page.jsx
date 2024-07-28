'use client'
import React, {useState, useEffect} from 'react'
import PersonasView from '@/components/personas/PersonasView'
import { GET_PERSONA } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const PersonasReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_PERSONA, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  }
    return (
      <PersonasView data={data.personaById}/>
    )
}

export default PersonasReadPage