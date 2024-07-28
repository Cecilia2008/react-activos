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
import { ADD_MODELO, GET_CATEGORIAS, GET_FABRICANTES, UPDATE_MODELO } from "@/graphql/QuerysSprint";
import { ADD_CATEGORIA_D, UPDATE_MODELO_D } from "@/graphql/QuerysDjango";
import { ApolloProvider, useMutation, useQuery } from "@apollo/client";
import clientSpring from "@/app/ClientSpring";
import clientDjango from "@/app/ClientDjango";

const ModelosFormCreate = ({ params, data, categorias, fabricantes }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [categoriaId, setCategoriaId] = useState(data ? data.categoria.id : "");
  const [fabricanteId, setFabricanteId] = useState(data ? data.fabricante.id : "");
  const [addModelo] = useMutation(ADD_MODELO, { client: clientSpring})
  const [updateModelo] = useMutation(UPDATE_MODELO, { client: clientSpring})
  const [addModeloD] = useMutation(ADD_CATEGORIA_D, { client: clientDjango})
  const [updateModeloD] = useMutation(UPDATE_MODELO_D, { client: clientDjango})

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && categoriaId != "" && fabricanteId != "") {
      if (id) {
        await updateModelo({
          variables: {id, nombre, categoriaId, fabricanteId}
        })
        router.refresh();
        router.push("/modelos");
      } else {
        await addModelo({
          variables: {nombre, categoriaId, fabricanteId}
        })
        router.refresh();
        router.push("/modelos");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  const handleSelectCategoria = (event) => {
    setCategoriaId(event.target.value);
  };

  const handleSelectFabricante = (event) => {
    setFabricanteId(event.target.value);
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
        <Select
            isRequired
            label="Categorías"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={categoriaId}
            onChange={handleSelectCategoria}
          >
            {categorias.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            label="Fabricantes"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={fabricanteId}
            onChange={handleSelectFabricante}
          >
            {fabricantes.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
        <button color="success" className="w-full mt-8">
          Enviar
        </button>
      </form>
    </Card>
    </ApolloProvider>
    </ApolloProvider>
  );
};

export default ModelosFormCreate;
