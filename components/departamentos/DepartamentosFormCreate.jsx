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
import { ADD_DEPARTAMENTO, UPDATE_DEPARTAMENTO } from "@/graphql/QuerysSprint";
import { ADD_DEPARTAMENTO_D, UPDATE_DEPARTAMENTO_D } from "@/graphql/QuerysDjango";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import clientSpring from "@/app/ClientSpring";
import clientDjango from "@/app/ClientDjango";

const ActivosFormCreate = ({ params, data }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [descripcion, setDescripcion] = useState(data ? data.descripcion : "");
  const [addDepartamento] = useMutation(ADD_DEPARTAMENTO, { client: clientSpring})
  const [updateDepartamento] = useMutation(UPDATE_DEPARTAMENTO, { client: clientSpring})
  const [addDepartamentoD] = useMutation(ADD_DEPARTAMENTO_D, { client: clientDjango})

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && descripcion != "") {
      if (id) {
        await updateDepartamento({
          variables: {id, nombre, descripcion}
        })
        router.refresh();
        router.push("/departamentos");
      } else {
        await addDepartamento({
          variables: {nombre, descripcion}
        })
        await addDepartamentoD({
          variables: {nombre, descripcion}
        })
        router.refresh();
        router.push("/departamentos");
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

export default ActivosFormCreate;
