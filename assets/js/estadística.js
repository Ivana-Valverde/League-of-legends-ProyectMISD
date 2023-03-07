//------------------------GRAFICO DE LINEA ----------------------------
//Definimos datos
const graficoL=document.querySelector("#graficoLinea");
const etiquetasL=["OctopathTraveler2","RezInfinitePSvP2","AtomicHeart","WilHearts","TheatrhythmFBL9","TalesofSymphoniaR"];
const datosAnalisisdeSeries={
    label:"datosVictorias",//leyenda
    data:[8.5,9,8.2,7,9,6],//datos
    backgroundColor:'rgba(100, 107, 236, 0.8)',
    borderColor:'blue',
    borderWidth:2,//ancho de linea
    tension: 0.1
};


//Creamos el grafico
new Chart(graficoL,{
    type:'bar',
    data:{
        labels:etiquetasL,
        datasets:[
            datosAnalisisdeSeries,
            
        ]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }],
        },
    }
});
//------------------------GRAFICO DE BARRAS----------------------------
//Definimos datos
const graficoB=document.querySelector("#graficoBarras");
const etiquetasB=["League","Pike mid","Legends","De lol","Skins","Wild rift"];


//------------------------GRAFICO DE PIE----------------------------
// Obtener una referencia al elemento canvas del DOM
const graficoP = document.querySelector("#graficoPie");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["ayer","hace2semanas","Elmespasado","Hace4meses","Hace6meses","Hace9meses"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [13.4, 13.3, 13.1, 12.21, 12.16, 12.10], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(153, 39, 245, 0.8)',
        'rgba(227, 165, 9, 0.8)',
        'rgba(199, 151, 225, 0.8)',
        'rgba(30, 14, 184, 0.8)',
        'rgba(221, 73, 233, 0.8)',
        'rgba(124, 157, 202, 0.8)',
    ],// Color de fondo
    borderColor: [
        'rgba(221, 209, 54, 1)',
        'rgba(221, 209, 54, 1)',
        'rgba(221, 209, 54, 1)',
        'rgba(221, 209, 54, 1)',
        'rgba(221, 209, 54, 1)',
        'rgba(221, 209, 54, 1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
    hoverOffset: 4
};
new Chart(graficoP, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});
//------------------------GRAFICO DE Dona----------------------------
// Obtener una referencia al elemento canvas del DOM
const graficoD = document.querySelector("#graficoDona");
// Las etiquetas son las porciones de la gráfica
const etiquetasD = ["AguasTurbias","Demacia","ElVacio","Ixtal","Jonia","Noxus"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresosD = {
    data: [9, 15, 9, 6, 21, 13], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(176, 100, 220, 0.8)',
        'rgba(204, 155, 181, 0.8)',
        'rgba(87, 85, 229, 0.8)',
        'rgba(238, 198, 15, 0.8)',
        'rgba(232, 80, 214, 0.8)',
        'rgba(45, 43, 232, 0.8)',
    ],// Color de fondo
    borderColor: [
        'rgba(182, 84, 11, 1)',
        'rgba(182, 84, 11, 1)',
        'rgba(182, 84, 11, 1)',
        'rgba(182, 84, 11, 1)',
        'rgba(182, 84, 11, 1)',
        'rgba(182, 84, 11, 1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
    hoverOffset: 4
};
new Chart(graficoD, {
    type: 'doughnut',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetasD,
        datasets: [
            datosIngresosD,
            // Aquí más datos...
        ]
    },
});
//-------------------------------Grafico de Radar-------------------------------------------------------------
const graficoR = document.querySelector("#graficoRadar");
const data = {
    labels: [
      'Jayce',
      'Samira',
      'Irelia',
      'Zeri',
      'Viego',
      'Varus',
      'Sett'
    ],
    datasets: [{
      label: 'Tasa de Victoria',
      data: [58, 54, 63, 55, 58, 55, 53],
      fill: true,
      backgroundColor: 'rgba(216, 122, 199, 0.8)',
      borderColor: 'rgba(153, 37, 198, 0.8)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(239, 209, 45, 0.8)'
    }, {
      label: 'Nivel',
      data: [518, 346, 488, 467, 191, 60, 598],
      fill: true,
      backgroundColor: 'rgba(113, 141, 231, 0.8)',
      borderColor: 'rgba(37, 10, 244, 0.8)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  new Chart(graficoR, {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  });
  //---------------GRAFICO POLAR----------------------------------------
  const graficoPolar=document.querySelector("#graficoPolar")
  const dataP = {
    labels: [
      'Luchadores',
      'Tanques',
      'Soportes',
      'Tiradores',
      'Magos',
      'Asesinos',
    ],
    datasets: [{
      label: 'Tipos de campeones',
      data: [70, 45, 35, 30, 62,41],
      backgroundColor: [
        'rgba(244, 203, 74, 0.8)',
        'rgba(203, 74, 244, 0.8)',
        'rgba(244, 74, 239, 0.8)',
        'rgba(130, 45, 127, 0.8)',
        'rgba(37, 82, 198, 0.8)',
        'rgba(37, 82, 198, 0.8)',
      ]
    }]
  };
new Chart(graficoPolar,  {
    type: 'polarArea',
    data: dataP,
    options: {}
  });
