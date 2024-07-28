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
import { ADD_MODELO, ADD_PERSONA, UPDATE_MODELO, UPDATE_PERSONA } from "@/graphql/QuerysSprint";
import clientSpring from "@/app/ClientSpring";
import { ApolloProvider, useMutation } from "@apollo/client";
import clientDjango from "@/app/ClientDjango";

const PersonasFormCreate = ({ params, data, departamentos}) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState();

  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [telefono, setTelefono] = useState(data ? data.telefono : "");
  const [ci, setCi] = useState(data ? data.ci : "");
  const [departamentoId, setDepartamentoId] = useState(data ? data.departamento.id : "");
  const [addPersona] = useMutation(ADD_PERSONA, {client: clientSpring})
  const [updatePersona] = useMutation(UPDATE_PERSONA,{client: clientSpring})

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    if (nombre != "" && email != "" && telefono != "" && ci != "" && departamentoId != "") {
      if (id) {
        await updatePersona({
          variables: {
            id: id,
            ci: ci,
            email: email,
            nombre: nombre,
            telefono: telefono,
            departamentoId: departamentoId,
          }
        })
        router.refresh();
        router.push("/personas");
      } else {
        await addPersona({
          variables: {
            ci: ci,
            email: email,
            nombre: nombre,
            telefono: telefono,
            departamentoId: departamentoId,
          }
        })
        router.refresh();
        router.push("/personas");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  const handleSelectDepartamento = (event) => {
    setDepartamentoId(event.target.value);
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
        <Input
            isRequired
            className="mt-4"
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            isRequired
            className="mt-4"
            type="text"
            id="telefono"
            label="Teléfono"
            placeholder="75848392"
            labelPlacement="outside"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
          <Input
            isRequired
            className="mt-4"
            type="text"
            id="ci"
            label="Documento de Identidad"
            placeholder="9234567"
            labelPlacement="outside"
            onChange={(e) => setCi(e.target.value)}
            value={ci}
          />
          <Select
            isRequired
            label="Departamento"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={departamentoId}
            onChange={handleSelectDepartamento}
          >
            {departamentos.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
          <input
            isRequired
            className="mt-8"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            label="Imagen"
            placeholder="you@example.com"
            labelPlacement="outside"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setSelectedImage(file ? URL.createObjectURL(file) : undefined);
            }}
          />
          <div className="flex content-center justify-center">
          {selectedImage && (
            <Image
              width={400}
              height={400}
              alt="Imagen seleccionada"
              src={selectedImage}
              className="max-h-[400px] object-contain"
            />
          )}
          </div>
        <button color="success" className="w-full mt-8">
          Enviar
        </button>
      </form>
    </Card>
    </ApolloProvider>
    </ApolloProvider>
  );
};

export default PersonasFormCreate;
