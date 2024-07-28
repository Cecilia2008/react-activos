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

const FabricantesView = ({ params, data }) => {
  const router = useRouter()
/*
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
*/
  return (
    <Card className="p-4 m-4">
        <h4 className="font-bold text-large">Nombre</h4>
        <small className="text-default-500">{data.nombre}</small>
        <br/>
        <h4 className="font-bold text-large">Serial</h4>
        <small className="text-default-500">{data.serial}</small>
        <h4 className="font-bold text-large">Ultima asignación</h4>
        <small className="text-default-500">{data.ultimaAsignacion}</small>
        <h4 className="font-bold text-large">Ultima designacion</h4>
        <small className="text-default-500">{data.ultimaDesignacion}</small>
        <h4 className="font-bold text-large">Valor actual</h4>
        <small className="text-default-500">{data.valorActual}</small>
        <h4 className="font-bold text-large">Ultima designacion</h4>
        <small className="text-default-500">{data.valorCompra}</small>
        <h4 className="font-bold text-large">Estado</h4>
        <small className="text-default-500">{data.estado}</small>
        <h4 className="font-bold text-large">Fecha de compra</h4>
        <small className="text-default-500">{data.fechaCompra}</small>

        <h4 className="font-bold text-large">Asignado a</h4>
        <small className="text-default-500">{data.asignadoA.nombre}</small>
        <h4 className="font-bold text-large">Depreciación</h4>
        <small className="text-default-500">{data.depreciacion.nombre}</small>
        <h4 className="font-bold text-large">Ubicación</h4>
        <small className="text-default-500">{data.ubicacion.nombre}</small>
        <h4 className="font-bold text-large">Modelo</h4>
        <small className="text-default-500">{data.modelo.nombre}</small>

    </Card>
  );
};

export default FabricantesView;
