"use client";
import {
  Button,
  Card,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ApolloProvider, useMutation } from "@apollo/client";
import { ADD_FABRICANTE, UPDATE_FABRICANTE } from "@/graphql/QuerysSprint";
import { ADD_FABRICANTE_D, UPDATE_FABRICANTE_D } from "@/graphql/QuerysDjango";
import clientDjango from "@/app/ClientDjango";
import clientSpring from "@/app/ClientSpring";

const ActivosFormCreate = ({ params, data }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [descripcion, setDescripcion] = useState(data ? data.descripcion : "");
  const [addFabricante] = useMutation(ADD_FABRICANTE, { client: clientSpring})
  const [updateFabricante] = useMutation(UPDATE_FABRICANTE,{ client: clientSpring})
  const [addFabricanteD] = useMutation(ADD_FABRICANTE_D, { client: clientDjango})
  const [updateFabricanteD] = useMutation(UPDATE_FABRICANTE_D)

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    if (nombre != "" && descripcion != "") {
      if (id) {
        await updateFabricante({
          variables: {id, nombre, descripcion}
        })
        router.refresh();
        router.push("/fabricantes");
      } else {
        await addFabricante({
          variables: {nombre, descripcion}
        })
        await addFabricanteD({
          variables: {nombre, descripcion}
        })
        router.refresh();
        router.push("/fabricantes");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  return (
    <ApolloProvider client={clientSpring}>
      <ApolloProvider client={clientDjango}>
    <Card className="p-4 m-4">
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <Input
          isRequired
          className="mt-4"
          type="text"
          id="nombre"
          label="Nombre"
          placeholder="HP-Pavilion Gamer"
          labelPlacement="outside"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <Textarea
          isRequired
          label="Description"
          id="descripcion"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="max-w mt-4"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
        <button color="success" className="w-full mt-8">
          Enviar
        </button>
      </form>
    </Card>
    </ApolloProvider>
    </ApolloProvider>
  );
};

export default ActivosFormCreate;
