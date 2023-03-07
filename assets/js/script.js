let btnbuscar = document.querySelector("#btnBuscar");
btnbuscar.onclick = function() {
  buscarChampion();
}


function buscarChampion() {
  url = `../data2/lol.json`
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => renderChampionData(data));

}
function renderChampionData(data) {
  document.querySelector("#champion-container").innerHTML = "";
  const { Champions } = data
  let championBuscado = document.querySelector("#id").value;
  let championEncontrado = Champions.filter(cham => cham.champion == championBuscado)

  championEncontrado.forEach(campeonE => {
    const { name, splash } = campeonE;
    const divChampions = document.createElement("div");
    const cardCampeon = document.createElement("div");
    cardCampeon.classList.add("card-campeon")
    //imagen
    const imagenCampeon = document.createElement("img");
    imagenCampeon.classList.add("splash-img")
    imagenCampeon.src = splash;
    imagenCampeon.alt = name;
    //para mostrar la ventana
    imagenCampeon.onclick = function() {
      mostrarVentanaE(campeonE);
    }
    const divName = document.createElement("div");
    const nameCampeon = document.createElement("h4");
    nameCampeon.textContent = name;

    //Ordenar elementos y divs
    divName.appendChild(nameCampeon);
    cardCampeon.appendChild(imagenCampeon);
    cardCampeon.appendChild(divName);
    divChampions.appendChild(cardCampeon);
    //Mostrarlo en el HTML
    document.querySelector("#champion-container").appendChild(divChampions);
    //Manipulamos el DOM para agregar imagenes

  });
}
function mostrarVentanaE(campeonE) {
  window.scrollTo(0, 0);
  //desestructuramos al objeto
  const { name, title, blurb, splash, tags, info, stats } = campeonE;
  let cont = `<div class='ventana-container'>
        <div clas='splash-ventana'>
    <a href="#" id="cerrar"><img src="assets/img/x.jpg" alt="error" width="50px" height="50px"></a>
            <img class='img-vent' src='${splash}' alt='${name}'>
            
        </div>
        <div class='ventana-info'>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>History:</strong> ${blurb}</p>
            <p><strong>Tags:</strong> ${tags}</p>
            <p><strong>Attack:</strong> ${info["attack"]}</p>
            <p><strong>Defense:</strong> ${info["defense"]}</p>
            <p><strong>Magic:</trong> ${info["Magic"]}</p>
            <p><strong>HP:</strong> ${stats["hp"]}</p>
            <p><strong>Hpper Level:</strong> ${stats["hpperlevel"]}</p> 
            <p><strong>Mp:</strong> ${stats["mp"]}</p>
            <p><strong>Mpper Level:</strong> ${stats["mpperlevel"]}</p> 
            <p><strong>Movespeed:</strong> ${stats["movespeed"]}</p> 
            <p><strong>Armor:</strong> ${stats["armor"]}</p> 
            <p><strong>Armorper Level:</strong> ${stats["armorperlevel"]}</p> 
            <p><strong>Spell Block:</strong> ${stats["spellblock"]}</p>
            <p><strong>Spell Blockper Level:</strong> ${stats["spellblockperlevel"]}</p> 
            <p><strong>Attack Range:</strong> ${stats["attackrange"]}</p> 
            <p><strong>HP regen:</strong> ${stats["hpregen"]}</p> 
            <p><strong>HP Regenper Level:</strong> ${stats["hpregenperlevel"]}</p> 
             <p><strong>Mp Regen:</strong> ${stats["mpregen"]}</p> 
            <p><strong>Mp Regenper Level:</strong> ${stats["mpregenperlevel"]}</p> 
            <p><strong>Crit:</strong> ${stats["crit"]}</p> 
            <p><strong>Critper level:</strong> ${stats["critperlevel"]}</p>
            <p><strong>Attack Damage:</strong> ${stats["attackdamage"]}</p> 
            <p><strong>Attack Damageper Level:</strong> ${stats["attackdamageperlevel"]}</p> 
            <p><strong>Attack Speedoff Set:</strong> ${stats["attackspeedoffset"]}</p> 
            <p><strong>Attack Speedper Level:</strong> ${stats["attackspeedperlevel"]}</p>      
        </div>
    </div>
    `;
  console.log(cont);
  document.querySelector("#ventana").innerHTML = cont;
  document.querySelector("#ventana").style.display = "block";
  //boton de cerrar
  document.querySelector("#cerrar").onclick = function() {
  document.querySelector("#ventana").style.display = "none";
  }
}