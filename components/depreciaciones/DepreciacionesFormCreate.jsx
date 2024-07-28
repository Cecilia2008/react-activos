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
import { ADD_DEPRECIACION, UPDATE_DEPRECIACION } from "@/graphql/QuerysSprint";
import { ADD_DEPRECIACION_D, UPDATE_DEPRECIACION_D } from "@/graphql/QuerysDjango";
import { useMutation } from "@apollo/client";

const DepreciacionesFormCreate = ({ params, data }) => {
  const router = useRouter();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [meses, setMeses] = useState(data ? data.meses : "");
  const [valorMinimo, setValorMinimo] = useState(data ? data.valorMinimo : "");
  const [addDepreciacion] = useMutation(ADD_DEPRECIACION)
  const [updateDepreciacion] = useMutation(UPDATE_DEPRECIACION)
  const [addDepreciacionD] = useMutation(ADD_DEPRECIACION_D)
  const [updateDepreciacionD] = useMutation(UPDATE_DEPRECIACION_D)
console.log(data);

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && meses != "" && valorMinimo != "") {
      if (id) {
        await updateDepreciacion({
          variables: {id, nombre, meses, valorMinimo}
        })
        router.refresh();
        router.push("/depreciaciones");
      } else {
        await addDepreciacion({
          variables: {nombre, meses, valorMinimo}
        })
        router.refresh();
        router.push("/depreciaciones");
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
        <Input
          isRequired
          className="mt-4"
          type="number"
          id="meses"
          label="Meses"
          placeholder="60"
          labelPlacement="outside"
          onChange={(e) => setMeses(e.target.value)}
          value={meses}
        />
        <Input
          isRequired
          className="mt-4"
          type="number"
          id="valorMinimo"
          label="Valor Mínimo"
          placeholder="HP-Pavilion Gamer"
          labelPlacement="outside"
          onChange={(e) => setValorMinimo(e.target.value)}
          value={valorMinimo}
        />
        <button color="success" className="w-full mt-8">
          Enviar
        </button>
      </form>
    </Card>
  );
};

export default DepreciacionesFormCreate;
