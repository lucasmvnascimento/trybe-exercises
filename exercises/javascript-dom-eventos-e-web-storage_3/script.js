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
  let dezDaysList = [29,30];
  for (let i=1; i<32; i+=1){
    dezDaysList.push(i);
  }
  let days = document.querySelector("#days");
  for (let i=0; i<dezDaysList.length; i+=1){
    let day = document.createElement("li");
    let aux = dezDaysList[i];
    day.innerText = aux;
    if (aux==24 || aux==25 || aux==31) {
      day.className = "day holiday";
    } else if (aux==4 || aux==11 || aux==18 || aux==25) {
      day.className = "day friday";
    } else {
      day.className = "day";
    }
    days.appendChild(day);
    }