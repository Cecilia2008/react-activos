'use client'
import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIAS } from '@/graphql/QuerysSprint'
import CategoriasTable from '@/components/categorias/CategoriasTable'


const CategoriasPage = () => {
  const { data: categorias, error, loading } = useQuery(GET_CATEGORIAS);

  if (loading) return <>Loading...</>;
  if (error) return <p>Error: {error.message}</p>;
  //
  return <CategoriasTable users={categorias.allCategorias} />;
  
  
}

export default CategoriasPage