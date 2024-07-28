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
import { ADD_UBICACION, UPDATE_UBICACION } from "@/graphql/QuerysSprint";
import { ADD_UBICACION_D, UPDATE_UBICACION_D } from "@/graphql/QuerysDjango";
import { useMutation } from "@apollo/client";
import clientSpring from "@/app/ClientSpring";
import clientDjango from "@/app/ClientDjango";

const UbicacionesFormCreate = ({ params, data }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [direccion, setDireccion] = useState(data ? data.direccion : "");
  const [addUbicacion] = useMutation(ADD_UBICACION, { client: clientSpring})
  const [updateUbicacion] = useMutation(UPDATE_UBICACION, { client: clientSpring})
  const [addUbicacionD] = useMutation(ADD_UBICACION_D, { client: clientDjango})
  const [updateUbicacionD] = useMutation(UPDATE_UBICACION_D, { client: clientDjango})

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && descripcion != "") {
      if (id) {
        await updateUbicacion({
          variables: {id, nombre, direccion}
        })
        router.refresh();
        router.push("/ubicaciones");
      } else {
        await addUbicacion({
          variables: {id, nombre, direccion}
        })
        await addUbicacionD({
          variables: {id, nombre, direccion}
        })
        router.refresh();
        router.push("/ubicaciones");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  return (
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
          onChange={(e) => setDireccion(e.target.value)}
          value={direccion}
        />
        <button color="success" className="w-full mt-8">
          Enviar
        </button>
      </form>
    </Card>
  );
};

export default UbicacionesFormCreate;
