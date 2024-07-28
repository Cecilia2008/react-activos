"use client";
import React from "react";
import FabricantesTable from "../../components/fabricantes/FabricantesTable";
import { useQuery } from '@apollo/client';
import { GET_FABRICANTES } from "@/graphql/QuerysSprint";


const FabricantesPage = () => {

  const { data, error, loading } = useQuery(GET_FABRICANTES);

  if (loading) return <>Loading...</>;
  if (error) return <p>Error: {error.message}</p>;
  return <FabricantesTable users={data.allFabricantes} />;
    
};

export default FabricantesPage;
