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
import { ADD_CATEGORIA, UPDATE_CATEGORIA } from "@/graphql/QuerysSprint";
import { ADD_CATEGORIA_D, UPDATE_CATEGORIA_D } from "@/graphql/QuerysDjango";
import clientSpring from "@/app/ClientSpring";
import clientDjango from "@/app/ClientDjango";

const CategoriasFormCreate = ({ params, data }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [descripcion, setDescripcion] = useState(data ? data.descripcion : "");
  const [addCategoria] = useMutation(ADD_CATEGORIA, { client: clientSpring})
  const [updateCategoria] = useMutation(UPDATE_CATEGORIA, { client: clientSpring})
  const [addCategoriaD] = useMutation(ADD_CATEGORIA_D, { client: clientDjango})
  const [updateCategoriaD] = useMutation(UPDATE_CATEGORIA_D)

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && descripcion != "") {
      if (id) {
        await updateCategoria({
          variables: {id, nombre, descripcion}
        })
        router.refresh();
        router.push("/categorias");
      } else {
        await addCategoria({
          variables: {nombre, descripcion}
        })
        await addCategoriaD({
          variables: {nombre, descripcion}
        })
        router.refresh();
        router.push("/categorias");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  return (
    <ApolloProvider client={clientSpring}>
      <ApolloProvider client={clientDjango}>
    <Card className="p-4 m-4">
      <form onSubmit={(e) => onSubmitHandle(e, data ? data.id : null)}>
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

export default CategoriasFormCreate;
