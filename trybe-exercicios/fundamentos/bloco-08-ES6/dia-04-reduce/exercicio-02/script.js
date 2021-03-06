const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
function reduceNames(array) {
  // escreva seu código aqui
  return array.reduce((acc, curr) => {
    // console.log(`acc: ${acc.author.name} ---- curr: ${curr}`);
    return acc + curr.author.name;
    // return acc;
  }, '');
}

console.log(reduceNames(books));

// 2

// const expectedResult = 43;

// function averageAge(array) {
//   // escreva seu código aqui
//   return array.reduce((acc, curr) => {
//     console.log(`acc: ${acc} ---- curr: ${curr}`);
//     (acc.releaseYear - acc.author.birthYear) - (curr.releaseYear - curr.author.birthYear);

//     return acc / array.length;
//   }, 0);
// }

// console.log(averageAge(books));

// 3


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook(array) {
//   // escreva seu código aqui
//   return array.reduce((prev, curr) => {
//     return prev.name.length > curr.name.length ? prev : curr
//   });
// }

// console.log(longestNamedBook(books));