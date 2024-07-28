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

  return (
    <Card className="p-4 m-4">
        <h4 className="font-bold text-large">Nombre</h4>
        <small className="text-default-500">{data.nombre}</small>
        <br/>
        <h4 className="font-bold text-large">Dirección</h4>
        <small className="text-default-500">{data.direccion}</small>

    </Card>
  );
};

export default FabricantesView;
