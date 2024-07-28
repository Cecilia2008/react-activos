"use client";
import { useQuery } from "@apollo/client";
import React, { useState } from 'react';
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Card from "@/components/dashboard/card";
import drilldown from "highcharts/modules/drilldown";
import {
  GET_CANT_ACTIVOS_CATEGORIA,
  GET_ACTIVOS_DRillDOWN,
  GET_CANT_PERSONAS_MODELO,
  GET_ESTADISTICAS,
  GET_TOTAL_VALORES_MODELO
} from "@/graphql/queryDjangoBi/queryDashboard";
import clientDjango from "@/app/ClientDjango";

drilldown(Highcharts);


const DashboardPage = () => {
    const [rowCount, setRowCount] = useState(null);

  const {
    data,
    error: error1,
    loading: loading1,
  } = useQuery(GET_CANT_ACTIVOS_CATEGORIA, {
    client: clientDjango,
  });

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useQuery(GET_ACTIVOS_DRillDOWN, { client: clientDjango });
  
  const {
    data: data3,
    error: error3,
    loading: loading3,
  } = useQuery(GET_CANT_PERSONAS_MODELO, { client: clientDjango });
  
  const {
    data: data4,
    error: error4,
    loading: loading4,
  } = useQuery(GET_ESTADISTICAS, { client: clientDjango });
  
  const {
    data: data5,
    error: error5,
    loading: loading5,
  } = useQuery(GET_TOTAL_VALORES_MODELO, { client: clientDjango });
  

  const convertData = data => {
    return data.map(category => {
      const newData = category.data.map(item => [item[0], parseInt(item[1], 10)]);
      return { ...category, data: newData };
    });
  };
  
  
  if (loading1 || loading2 || loading3) return <p>Loading...</p>;
  if (error1 || error2 || error3)
    return <p>Error: {error1 ? error1.message : error2? error2.message : error3}</p>;
  
  const allCategorias = data?.categoriasConActivos;
  const convertedData = convertData(data2?.categoriaActivos || []);
  
  const allModelos = data3?.modelosCantidadPersonas;

  const estadisticas = data4?.estadisticas;

  const activosData = data5.totalValoresPorModelo;

  const formattedData = [
    activosData.map(activo => ({
      name: activo.modelo,
      y: activo.valorCompraTotal,
      drilldown: `${activo.modelo}2`
    })),
    activosData.map(activo => ({
      name: activo.modelo,
      y: activo.valorActualTotal,
      drilldown: `${activo.modelo}2`
    }))
  ];

  
  async function getRowCount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("https://sw2-parcial2-ia-backend-production.up.railway.app/api/getAllMantenimientos", requestOptions);
      const result = await response.json();
      const rowCount = result.length;
      setRowCount(rowCount);
    } catch (error) {
      console.error('Error:', error);
      setRowCount(-1); // Indica que ocurrió un error
    }
  }
  getRowCount();
  
  /* console.log(allCategorias);
  console.log(convertedData); */

  const options1 = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Cantidad de Activos por Categoria",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Cantidad de activos",
      },
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },

    series: [
      {
        name: "Cantidad",
        colorByPoint: true,
        data: allCategorias,
      },
    ],
    drilldown: {
        
      series: convertedData,
    },
  };

  const options2 = {
    chart: {
        type: "column",
      },
      title: {
        text: "Cantidad Modelos Asignados a Personas",
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "Cantidad de Modelos",
        },
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: false,
          },
        },
      },
  
      series: [
        {
          name: "Personas",
          colorByPoint: true,
          data: allModelos,
        },
      ],
    
  };

  const options3 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Depreciacion del Valor de Compra y Valor Actual por Modelo'
    },
    xAxis: {
      categories: activosData.map(activo => activo.modelo),
      title: {
        text: 'Modelo'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Valor en USD'
      }
    },
    series: [
      {
        name: 'Valor de Compra Total',
        data: formattedData[0]
      },
      {
        name: 'Valor Actual Total',
        data: formattedData[1]
      }
    ]
  };

  const options4 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Chart 4",
    },
    series: [
      {
        data: [10, 11, 12],
      },
    ],
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card
          title="Total Personas"
          data={estadisticas.totalPersonas}
          icon="mdi:person-group-outline"
          iconColor="#006FEE"
        />
        <Card title="Total Activos" data={estadisticas.totalActivos} icon="icon-park:pay-code" />
        <Card
          title="Total Modelos"
          data={estadisticas.totalModelos}
          icon="mdi:cube-scan"
          iconColor="#006FEE"
        />
        <Card
          title="Total Mantenimientos"
          data={rowCount}
          icon="grommet-icons:host-maintenance"
          iconColor="#006FEE"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HighchartsReact highcharts={Highcharts} options={options1} />
        <HighchartsReact highcharts={Highcharts} options={options2} />
        
        {/* <HighchartsReact highcharts={Highcharts} options={options4} /> */}
      </div>
      <div className="mt-4">
        <HighchartsReact highcharts={Highcharts} options={options3} className="w-full" />
      </div>
    </div>
  );
};

export default DashboardPage;
