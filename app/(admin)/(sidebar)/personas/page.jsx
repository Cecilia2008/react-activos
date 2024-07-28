'use client'
import React, {useState, useEffect} from 'react'
import PersonasTable from '@/components/personas/PersonasTable'
import { GET_PERSONAS } from '@/graphql/QuerysSprint'
import { useQuery } from '@apollo/client'


const PersonasPage = () => {

  const { data, error, loading } = useQuery(GET_PERSONAS);

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <PersonasTable users={data.allPersonas}/>
    )
  }
  
}

export default PersonasPage