// importa funciones de data.js
import { orderDataUp, orderDataDown } from "./data.js";
// data original importada
import athletes from "./data/athletes/athletes.js";
// Data completa
const dataAthletes = athletes.athletes;
//Data filtrada
const newDataWomen = dataAthletes.filter((athletes) => {
  if (athletes.gender === "F" && athletes.age <= 25) {
    return true;
  }
});
// referencias a elementos
const btnDisplayAll = document.getElementById("display-data");
const filterBySport = document.getElementById("filter-sport");
const filterByHeight = document.getElementById("filter-height");
const orderNameUp = document.getElementById("order-up");
const orderNameDown = document.getElementById("order-down");
// contenendores de las tablas desplegadas
const containerViewAll = document.querySelector(".containerViewAll");
const containerFilterHeight = document.querySelector(".containerFilterHeight");
const containerFilterSport = document.querySelector(".containerFilterSport");
const containerSort = document.querySelector(".containerSort");
const containerMain = document.querySelector(".containerMain");
// llamada a eventos
btnDisplayAll.addEventListener("click", showAll);
filterBySport.addEventListener("click", showSport);
filterByHeight.addEventListener("click", showHeight);
orderNameUp.addEventListener("click", showOrderUp);
orderNameDown.addEventListener("click", showOrderDown);
//mensaje contenedor inicio 
document.addEventListener("DOMContentLoaded", function(){
  let messageTable = document.createElement('div'); 
  messageTable.innerHTML += `<p>${"You can find everything you need about Olympic Women..."}</p>`;
  containerMain.appendChild(messageTable);
});
// desplegar a todas las atletas 
function showAll() {
  containerMain.style.display = "none";
  containerViewAll.style.display = "block";
  containerFilterHeight.style.display = "none";
  containerFilterSport.style.display = "none";
  containerSort.style.display = "none";
  let tableAll = document.createElement("table");
  containerViewAll.innerHTML = "";
  tableAll.innerHTML = `
  <thead>
    <tr>
      <th>${"Athlete"}</th>
      <th>${"Age"}</th>
      <th>${"Team"}</th>
      <th>${"Sport"}</th>
      <th>${"Medal"}</th>
    </tr>
  </thead>  
  `;
  let tableBodyAll = document.createElement("tbody");
  newDataWomen.forEach(function (athlete) {
    tableBodyAll.innerHTML += `
    <tr>
      <td>${athlete.name}</td>
      <td>${athlete.age}</td>
      <td>${athlete.team}</td>
      <td>${athlete.sport}</td>
      <td>${athlete.medal}</td>
    </tr>
    `;
  });
  tableAll.appendChild(tableBodyAll);
  containerViewAll.appendChild(tableAll);
}
// desplegar filtro por deportes
function showSport() {
  containerMain.style.display = "none";
  containerViewAll.style.display = "none";
  containerFilterHeight.style.display = "none";
  containerFilterSport.style.display = "block";
  containerSort.style.display = "none";
  let tableSport = document.createElement("table");
  containerFilterSport.innerHTML = "";
  tableSport.innerHTML = `
  <thead>
    <tr>
      <th>${"Sport"}</th>
      <th class="large-td">${"Event"}</th>
      <th>${"Team"}</th>
    </tr>
  </thead>  
  `;
  let tableBodySport = document.createElement("tbody");
  newDataWomen.forEach(function (athlete){
    tableBodySport.innerHTML += `
    <tr>
      <td>${athlete.sport}</td>
      <td class="large-td">${athlete.event}</td>
      <td>${athlete.team}</td>
    </tr>
    `;
  });
  tableSport.appendChild(tableBodySport);
  containerFilterSport.appendChild(tableSport);
}
// desplegar filtro por altura y peso
function showHeight() {
  containerMain.style.display = "none";
  containerViewAll.style.display = "none";
  containerFilterHeight.style.display = "block";
  containerFilterSport.style.display = "none";
  containerSort.style.display = "none";
  let tableHeight = document.createElement("table");
  containerFilterHeight.innerHTML = "";
  tableHeight.innerHTML = `
  <thead>
    <tr>
      <th>${"Athlete"}</th>
      <th>${"Age"}</th>
      <th>${"Weight"}</th>
      <th>${"Height"}</th>
    </tr>
  </thead>  
  `;
  let tableBodyHeight = document.createElement("tbody");
  newDataWomen.forEach(function (athlete) {
    tableBodyHeight.innerHTML += `
    <tr>
    <td>${athlete.name}</td>
    <td>${athlete.age}</td>
    <td>${athlete.weight}</td>
    <td>${athlete.height}</td>
  </tr>
    `;
  });
  tableHeight.appendChild(tableBodyHeight);
  containerFilterHeight.appendChild(tableHeight);
}
// desplegar nombres de atletas ordenados
function showOrderUp() {
  containerMain.style.display = "none";
  containerViewAll.style.display = "none";
  containerFilterHeight.style.display = "none";
  containerFilterSport.style.display = "none";
  containerSort.style.display = "block";
  let tableOrder= document.createElement("table");
  containerSort.innerHTML = "";
  tableOrder.innerHTML = `
  <thead>
    <tr>
      <th>${"Athlete"}</th>
      <th>${"Team"}</th>
      <th>${"Sport"}</th>
    </tr>
  </thead>  
  `;
  let tableBodyOrder = document.createElement("tbody");
  const orderedDataUp = orderDataUp(newDataWomen);
  orderedDataUp.forEach(function (athlete) {
    tableBodyOrder.innerHTML += `
    <tr>
    <td>${athlete.name}</td>
    <td>${athlete.team}</td>
    <td>${athlete.sport}</td>
  </tr>
    `;
  });
  tableOrder.appendChild(tableBodyOrder);
  containerSort.appendChild(tableOrder);
}
function showOrderDown() {
  containerMain.style.display = "none";
  containerViewAll.style.display = "none";
  containerFilterHeight.style.display = "none";
  containerFilterSport.style.display = "none";
  containerSort.style.display = "block";
  let tableOrder= document.createElement("table");
  containerSort.innerHTML = "";
  tableOrder.innerHTML = `
  <thead>
    <tr>
      <th>${"Athlete"}</th>
      <th>${"Team"}</th>
      <th>${"Sport"}</th>
    </tr>
  </thead>  
  `;
  let tableBodyOrder = document.createElement("tbody");
  const orderedDataDown = orderDataDown(newDataWomen);
  orderedDataDown.forEach(function (athlete) {
    tableBodyOrder.innerHTML += `
    <tr>
    <td>${athlete.name}</td>
    <td>${athlete.team}</td>
    <td>${athlete.sport}</td>
  </tr>
    `;
  });
  tableOrder.appendChild(tableBodyOrder);
  containerSort.appendChild(tableOrder);
}
