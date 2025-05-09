
const computers = [
  {
    id: 1,
    name: "Computador Gamer",
    price: 5000,
    description: "Computador gamer com placa de vídeo dedicada.",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Notebook Dell",
    price: 3000,
    description: "Notebook Dell com processador i7.",
    imageUrl: "",
  },
  {
    id: 3,
    name: "Monitor LG",
    price: 1000,
    description: "Monitor LG de 27 polegadas.",
    imageUrl: "",
  },
]

const electronics = [
  {
    id: 1,
    name: "Smartphone Samsung",
    price: 2000,
    description: "Smartphone Samsung com câmera de 108MP.",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Fone de Ouvido Bluetooth",
    price: 500,
    description: "Fone de ouvido bluetooth com cancelamento de ruído.",
    imageUrl: "",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 833.00,
    description: "Smartwatch com monitoramento de saúde.",
    imageUrl: "",
  },
]

const books = [
  {
    id: 1,
    name: "Trilogia O Senhor dos Anéis",
    price: 156.43,
    description: "Uma obra-prima da literatura fantástica.",
    imageUrl: "https://m.media-amazon.com/images/I/71unpdtgf2L._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Dom Quixote",
    price: 91.98,
    description: "Um clássico da literatura espanhola.",
    imageUrl: "https://m.media-amazon.com/images/I/71pOg6PbyCL._SL1500_.jpg",
  },
  {
    id: 3,
    name: "1984",
    price: 43.17,    
    description: "Um romance distópico de George Orwell.",
    imageUrl: "https://m.media-amazon.com/images/I/81l3pUGbT8L._SL1500_.jpg",
  }
]


export function getComputers() {
  return computers
}

export function getElectronics() {
  return electronics
}

export function getBooks() {
  return books
}
