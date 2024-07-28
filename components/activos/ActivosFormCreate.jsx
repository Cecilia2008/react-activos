"use client";
import {
  Button,
  Card,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
  DateInput
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { estados } from "./data-categories";
import {CalendarDate, parseDate} from "@internationalized/date";
import { useRouter } from "next/navigation";
import { ADD_ACTIVO, UPDATE_ACTIVO } from "@/graphql/QuerysSprint";
import { ADD_ACTIVO_D, UPDATE_ACTIVO_D } from "@/graphql/QuerysDjango";
import { ApolloProvider, useMutation } from "@apollo/client";
import clientSpring from "@/app/ClientSpring";
import clientDjango from "@/app/ClientDjango";

const formatDate = (date) => {
  if (!date) return '';
  const day = String(date.day).padStart(2, '0');
  const month = String(date.month).padStart(2, '0');
  const year = date.year;
  return `${day}-${month}-${year}`;
};

const PersonasFormCreate = ({ params, data, depreciaciones, modelos, personas, ubicaciones }) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState();


  const [nombre, setNombre] = useState(data ? data.nombre : "");
  const [serial, setSerial] = useState(data ? data.serial : "");
  const [estado, setEstado] = useState(data ? data.estado : "");
  const [etiqueta, setEtiqueta] = useState(data ? data.etiqueta : "");
  const [fechaC, setFechaC] = useState(new CalendarDate(1995, 11, 6));
  const [valorCompra, setValorCompra] = useState(data ? data.valorCompra : "");
  const [valorActual, setValorActual] = useState(data ? data.valorActual : "");
  const [ultimaAsignacionC, setUltimaAsignacionC] = useState(new CalendarDate(1995, 11, 6));
  const [ultimaDesignacionC, setUltimaDesignacionC] = useState( new CalendarDate(1995, 11, 6));
  const [depreciacionId, setDepreciacionId] = useState(data ? data.depreciacion.id : "");
  const [modelosId, setModelosId] = useState(data ? data.modelo.id : "");
  const [asignadoAId, setAsignadoAId] = useState(data ? data.asignadoA.id : "");
  const [ubicacionesId, setUbicacionesId] = useState(data ? data.ubicacion.id : "");

  const [addActivo] = useMutation(ADD_ACTIVO, {client: clientSpring})
  const [updateActivo] = useMutation(UPDATE_ACTIVO, {client: clientSpring})
  const [addActivoD] = useMutation(ADD_ACTIVO_D, {client: clientDjango})
  const [updateActivoD] = useMutation(UPDATE_ACTIVO_D, {client: clientDjango})

  const onSubmitHandle = async (e, id) => {
    e.preventDefault();
    const fechaCompra = formatDate(fechaC)
    const ultimaAsignacion = formatDate(ultimaAsignacionC)
    const ultimaDesignacion = formatDate(ultimaDesignacionC)
console.log(nombre);
console.log(serial);
console.log(ultimaAsignacion);
console.log(ultimaDesignacion);
console.log(valorActual);
console.log(valorCompra);
console.log(asignadoAId);
console.log(depreciacionId);
console.log(estado);
console.log(fechaCompra);
console.log(modelosId);
console.log(ubicacionesId);
    if (nombre != "" && serial != "" && estado != "" && fechaC != "" && valorCompra != "" && depreciacionId != "" && modelosId != "" && asignadoAId != ""  && ubicacionesId != "") {
      if (id) {
        await updateActivo({
          variables: {
            id,
            nombre,
            serial,
            ultimaAsignacion,
            ultimaDesignacion,
            valorActual,
            valorCompra,
            asignadoAId,
            depreciacionId,
            estado,
            fechaCompra,
            modeloId,
            ubicacionId
          }
        })
        router.refresh();
        router.push("/activos");
      } else {
        await addActivo({
          variables: {
            nombre,
            serial,
            ultimaAsignacion,
            ultimaDesasignacion,
            valorActual,
            valorCompra,
            asignadoAId,
            depreciacionId,
            estado,
            fechaCompra,
            modeloId,
            ubicacionId
          }
        })
        router.refresh();
        router.push("/activos");
      }
    } else {
      console.log("Rellene todos los campos con *");
    }
  };

  const handleUltimaAsignacionChange = (newDate) => {
    setUltimaAsignacionC(newDate);
    console.log(ultimaAsignacionC)
  };

  const handleUltimaDesignacionChange = (newDate) => {
    setUltimaDesignacionC(newDate);
    console.log(ultimaDesignacionC)
  };

  const handleFechaCChange = (newDate) => {
    setFechaC(newDate);
    console.log(fechaC)
  };

  const handleSelectDepreciacion = (event) => {
    setDepreciacionId(event.target.value);
    console.log(depreciacionId)
  };

  const handleAsignadoId = (event) => {
    setAsignadoAId(event.target.value);
    console.log(asignadoAId)
  };

  const handleSelectModelos = (event) => {
    setModelosId(event.target.value);
    console.log(modelosId);
  };

  const handleSelectUbicacion = (event) => {
    setUbicacionesId(event.target.value);
    console.log(ubicacionesId);
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
            type="text"
            label="Serial"
            placeholder="6030939393"
            labelPlacement="outside"
            onChange={(e) => setSerial(e.target.value)}
            value={serial}
          />
          <Input
            isRequired
            className="mt-4"
            type="text"
            label="Estado"
            placeholder="6030939393"
            labelPlacement="outside"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
          <Input
            isRequired
            className="mt-4"
            type="text"
            label="Etiqueta"
            placeholder="6030939393"
            labelPlacement="outside"
            onChange={(e) => setEtiqueta(e.target.value)}
            value={etiqueta}
          />
        <DateInput
          label="Fecha de Compra"
          defaultValue={fechaC} 
          placeholderValue={new CalendarDate(1995, 11, 6)} 
          labelPlacement="outside"
          onChange={handleFechaCChange}
        />
        <DateInput
          label="Última asignación"
          defaultValue={ultimaAsignacionC} 
          placeholderValue={new CalendarDate(1995, 11, 6)} 
          labelPlacement="outside"
          onChange={handleUltimaAsignacionChange}
        />
        <DateInput
          label="Última designacion"
          defaultValue={ultimaDesignacionC} 
          placeholderValue={new CalendarDate(1995, 11, 6)} 
          labelPlacement="outside"
          onChange={handleUltimaDesignacionChange}
        />
          <Input
            isRequired
            className="mt-4"
            type="number"
            label="Valor de Compra"
            placeholder="0.00"
            labelPlacement="outside"
            onChange={(e) => setValorCompra(e.target.value)}
            value={valorCompra}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
          <Input
            isRequired
            className="mt-4"
            type="number"
            label="Valor Actual"
            placeholder="0.00"
            labelPlacement="outside"
            onChange={(e) => setValorActual(e.target.value)}
            value={valorActual}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
          <Select
            isRequired
            label="Categorías"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={depreciacionId}
            onChange={handleSelectDepreciacion}
          >
            {depreciaciones.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            label="Modelos"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={modelosId}
            onChange={handleSelectModelos}
          >
            {modelos.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            label="Personas"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={asignadoAId}
            onChange={handleAsignadoId}
          >
            {personas.map((estado) => (
              <SelectItem key={estado.id} value={estado.id}>{estado.nombre}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            label="Ubicaciones"
            placeholder="Selecciona una categoría"
            className="max-w mt-4"
            value={ubicacionesId}
            onChange={handleSelectUbicacion}
          >
            {ubicaciones.map((estado) => (
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
