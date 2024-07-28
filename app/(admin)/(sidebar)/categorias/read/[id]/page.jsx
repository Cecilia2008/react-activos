'use client'
import React, {useState, useEffect} from 'react'
import CategoriasView from '@/components/categorias/CategoriasView'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIA } from '@/graphql/QuerysSprint'


const CategoriasReadPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_CATEGORIA, {
    variables: { id: params.id },
  });



  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <CategoriasView data={data.categoriaById}/>
    )
  }
}

export default CategoriasReadPage