// Exercício 1
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const info = Object.entries(order);
  const message = `Olá ${info[3][1].delivery.deliveryPerson}, entrega para: ${info[0][1]}, Telefone: ${info[1][1]}, R. ${info[2][1].street}, N: ${info[2][1].number}, AP: ${info[2][1].apartment}`;
  console.log(message);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const info = Object.values(order);
  const pizzas = Object.keys(order.order.pizza);
  const bebida = Object.values(order.order.drinks.coke);
  const message = `Olá ${info[0]}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida[0]} é R$ ${order.payment.total}`;
  console.log(message);
}

orderModifier(order);

// Exercício 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (object,key,value) => object[key] = value;
adicionaTurno(lesson2,'turno','manhã');
console.log(lesson2);

const listaKeys = (object) => console.log(Object.keys(object));

const tamanhoObjeto = (object) => console.log(Object.entries(object).length);

const listaValues = (object) => console.log(Object.values(object));

const allLessons = {
  lesson1,
  lesson2,
  lesson3
}

const numeroEstudantes = object => {
  const lessons = Object.values(object);
  let total = 0;
  for (let i in lessons) {
    total += lessons[i].numeroEstudantes;
  }
  console.log(total);
}
numeroEstudantes(allLessons);

const pegaValue = (object,position) => Object.values(object)[position];
console.log(pegaValue(lesson1,0));

const verificaPar = (object,key,value) => {
  const pares = Object.entries(object);
  let flag = false;
  for (let i in pares){
    if (pares[i][0] === key && pares[i][1] === value) {
      flag = true;
    }
  }
  return flag;
}
console.log(verificaPar(lesson3,'turno','noite'));