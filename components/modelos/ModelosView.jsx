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

const ModelosView = ({ params, data }) => {
  const router = useRouter()

  return (
    <Card className="p-4 m-4">
        <h4 className="font-bold text-large">Nombre</h4>
        <small className="text-default-500">{data.nombre}</small>
        <br/>
        <h4 className="font-bold text-large">Categoría</h4>
        <small className="text-default-500">{data.categoria.nombre}</small>
        <br/>
        <h4 className="font-bold text-large">Fabricante</h4>
        <small className="text-default-500">{data.fabricante.nombre}</small>

    </Card>
  );
};

export default ModelosView;
