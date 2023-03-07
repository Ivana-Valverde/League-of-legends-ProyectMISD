//ASESINOS

function obtenerAsesinos(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData1(data));
}
const assassinA=document.querySelector("#btn-asesinos")
assassinA.onclick=function () {
  obtenerAsesinos();
}

function filtrarData1(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let assassinAs = Champions.filter(asesino => asesino.tags == "assassin");
  console.log(assassinAs )
document.querySelector("#champion-container").innerHTML="";
  
  assassinAs.forEach(asesino => {
    const{id,splash}=asesino;
    const divChampions=document.createElement("div");
    const cardAsesino=document.createElement("div");
    cardAsesino.classList.add("card-campeon")
    //imagen
    const imagenAsesino=document.createElement("img");
    imagenAsesino.classList.add("splash-img")
    imagenAsesino.src=splash;
    imagenAsesino.alt=id;
    //para mostrar la ventana
    imagenAsesino.onclick=function(){
        mostrarVentana(asesino);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idAsesino=document.createElement("h4");
  idAsesino.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idAsesino);
    cardAsesino.appendChild(imagenAsesino);
    cardAsesino.appendChild(divNombre);
    divChampions.appendChild(cardAsesino);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}



//LUCHADORES

function obtenerLuchadores(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData2(data));
}
const fighterF=document.querySelector("#btn-luchadores")
fighterF.onclick=function () {
  obtenerLuchadores();
}
function filtrarData2(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let fighterFi = Champions.filter(luchador => luchador.tags == "fighter");
  console.log(fighterFi)
document.querySelector("#champion-container").innerHTML="";
  
  fighterFi.forEach(luchador => {
    const{id,splash}=luchador;
    const divChampions=document.createElement("div");
    const cardLuchador=document.createElement("div");
    cardLuchador.classList.add("card-campeon")
    //imagen
    const imagenLuchador=document.createElement("img");
    imagenLuchador.classList.add("splash-img")
    imagenLuchador.src=splash;
    imagenLuchador.alt=id;
    //para mostrar la ventana
    imagenLuchador.onclick=function(){
        mostrarVentana(luchador);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idLuchador=document.createElement("h4");
    idLuchador.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idLuchador);
    cardLuchador.appendChild(imagenLuchador);
    cardLuchador.appendChild(divNombre);
    divChampions.appendChild(cardLuchador);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}

//MAGOS

function obtenerMagos(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData3(data));
}
const mageM=document.querySelector("#btn-magos")
mageM.onclick=function () {
  obtenerMagos();
}
function filtrarData3(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let mageMa = Champions.filter(mago => mago.tags == "mage");
  console.log(mageMa)
document.querySelector("#champion-container").innerHTML="";
  
  mageMa.forEach(mago => {
    const{id,splash}=mago;
    const divChampions=document.createElement("div");
    const cardMago=document.createElement("div");
    cardMago.classList.add("card-campeon")
    //imagen
    const imagenMago=document.createElement("img");
    imagenMago.classList.add("splash-img")
    imagenMago.src=splash;
    imagenMago.alt=id;
    //para mostrar la ventana
    imagenMago.onclick=function(){
        mostrarVentana(mago);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idMago=document.createElement("h4");
    idMago.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idMago);
    cardMago.appendChild(imagenMago);
    cardMago.appendChild(divNombre);
    divChampions.appendChild(cardMago);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}

//TIRAD0RES

function obtenerTiradores(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData4(data));
}
const marksmanM=document.querySelector("#btn-tiradores")
marksmanM.onclick=function () {
  obtenerTiradores();
}
function filtrarData4(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let marksmanMa = Champions.filter(tirador => tirador.tags == "marksman");
  console.log(marksmanMa)
document.querySelector("#champion-container").innerHTML="";
  
  marksmanMa.forEach(tirador => {
    const{id,splash}=tirador;
    const divChampions=document.createElement("div");
    const cardTirador=document.createElement("div");
    cardTirador.classList.add("card-campeon")
    //imagen
    const imagenTirador=document.createElement("img");
    imagenTirador.classList.add("splash-img")
    imagenTirador.src=splash;
    imagenTirador.alt=id;
    //para mostrar la ventana
    imagenTirador.onclick=function(){
        mostrarVentana(tirador);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idTirador=document.createElement("h4");
    idTirador.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idTirador);
    cardTirador.appendChild(imagenTirador);
    cardTirador.appendChild(divNombre);
    divChampions.appendChild(cardTirador);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}

//APOYOS

function obtenerApoyo(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData5(data));
}
const supportS=document.querySelector("#btn-apoyos")
supportS.onclick=function () {
  obtenerApoyo();
}
function filtrarData5(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let supportSu = Champions.filter(apoyo => apoyo.tags == "support");
  console.log(supportSu)
document.querySelector("#champion-container").innerHTML="";
  
  supportSu.forEach(apoyo => {
    const{id,splash}=apoyo;
    const divChampions=document.createElement("div");
    const cardApoyo=document.createElement("div");
    cardApoyo.classList.add("card-campeon")
    //imagen
    const imagenApoyo=document.createElement("img");
    imagenApoyo.classList.add("splash-img")
    imagenApoyo.src=splash;
    imagenApoyo.alt=id;
    //para mostrar la ventana
    imagenApoyo.onclick=function(){
        mostrarVentana(apoyo);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idApoyo=document.createElement("h4");
    idApoyo.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idApoyo);
    cardApoyo.appendChild(imagenApoyo);
    cardApoyo.appendChild(divNombre);
    divChampions.appendChild(cardApoyo);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}

//TANQUES

function obtenerTanque(){
    url="../data/lol.json"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=> filtrarData6(data));
}
const tankT=document.querySelector("#btn-tanques")
tankT.onclick=function () {
  obtenerTanque();
}
function filtrarData6(data){
  const {Champions}=data;
  const{tags,id}=Champions;
  console.log(tags);
    let tankTa = Champions.filter(tanque => tanque.tags == "tank");
  console.log(tankTa)
document.querySelector("#champion-container").innerHTML="";
  
  tankTa.forEach(tanque => {
    const{id,splash}=tanque;
    const divChampions=document.createElement("div");
    const cardTanque=document.createElement("div");
    cardTanque.classList.add("card-campeon")
    //imagen
    const imagenTanque=document.createElement("img");
    imagenTanque.classList.add("splash-img")
    imagenTanque.src=splash;
    imagenTanque.alt=id;
    //para mostrar la ventana
    imagenTanque.onclick=function(){
        mostrarVentana(tanque);
    }
    //nombre
    const divNombre=document.createElement("div");
    const idTanque=document.createElement("h4");
    idTanque.textContent=id;

    //Ordenar elementos y divs
    divNombre.appendChild(idTanque);
    cardTanque.appendChild(imagenTanque);
    cardTanque.appendChild(divNombre);
    divChampions.appendChild(cardTanque);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
});

}
