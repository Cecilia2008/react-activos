'use client'
import React, {useState, useEffect} from 'react'
import CategoriasFormCreate from '@/components/categorias/CategoriasFormCreate'
import { GET_CATEGORIA } from '@/graphql/QuerysSprint';
import { useQuery } from '@apollo/client';

const CategoriasEditPage = ({params}) => {

  console.log(params.id)
  const { loading, error, data } = useQuery(GET_CATEGORIA, {
    variables: { id: params.id },
  });

  if(loading) {
    return <>Loading...</>
  } else {
    return (
      <CategoriasFormCreate data={data.categoriaById}/>
    )
  }
}

export default CategoriasEditPage