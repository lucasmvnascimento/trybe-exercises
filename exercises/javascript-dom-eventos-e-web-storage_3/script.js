function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  let dezDaysList = [29,30];
  for (let i=1; i<32; i+=1){
    dezDaysList.push(i);
  }
  let days = document.querySelector("#days");
  for (let i=0; i<dezDaysList.length; i+=1){
    let day = document.createElement("li");
    let aux = dezDaysList[i];
    day.innerText = aux;
    if (aux==24 || aux==31) {
      day.className = "day holiday";
    } else if (aux==4 || aux==11 || aux==18) {
      day.className = "day friday";
    } else if (aux == 25){
      day.className = "day holiday friday";
    } else {
      day.className = "day";
    }
    days.appendChild(day);
    }

// Exercicio 2
let feriados = "Feriados";
function criaBotaoFeriados (feriados) {
  let botaoFeriados = document.createElement('button');
  botaoFeriados.innerText = feriados;
  botaoFeriados.className = "btn-holiday";
  document.querySelector(".buttons-container").appendChild (botaoFeriados);
}
criaBotaoFeriados(feriados);

// Exercicio 3
diasFeriados = document.querySelectorAll (".holiday");
botaoFeriados = document.querySelector(".btn-holiday");
let estadoAtualFeriado = 0;
function mudaCorFeriados () {
  if (estadoAtualFeriado == 0){
    for (let i=0; i<diasFeriados.length; i+=1){
      diasFeriados[i].style.backgroundColor = "blue";
    }
    estadoAtualFeriado = 1;
  }else if (estadoAtualFeriado == 1) {
    for (let i=0; i<diasFeriados.length; i+=1){
      diasFeriados[i].style.backgroundColor = "rgb(238,238,238)";
    }
    estadoAtualFeriado = 0;
  }
}
botaoFeriados.addEventListener('click', mudaCorFeriados);

// Exercicio 4
function criaBotaoSextas () {
  let botaoSextas = document.createElement("button");
  botaoSextas.id = "btn-friday";
  botaoSextas.innerText = "Sexta-Feira";
  document.querySelector(".buttons-container").appendChild(botaoSextas);
}
criaBotaoSextas();

// Exercicio 5
let sextas = document.querySelectorAll(".friday");
let sextasOriginais = [];
for (let i=0; i<sextas.length; i+=1){
  sextasOriginais.push(sextas[i].innerText);
}
let botaoSextas = document.querySelector("#btn-friday");
let estadoAtualSexta = 0;
function mudaCorSexta () {
  if (estadoAtualSexta == 0){
    for(let i=0; i<sextas.length; i+=1) {
      sextas[i].innerText = "SEXTOU!";
    }
    estadoAtualSexta = 1;
  } else if (estadoAtualSexta == 1) {
    for(let i=0; i<sextas.length; i+=1) {
      sextas[i].innerText = sextasOriginais[i];
    }
    estadoAtualSexta = 0;
  }
}
botaoSextas.addEventListener('click',mudaCorSexta);