// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXufrkpUpqtWzPD7n8_oZ_MmM1X26bNCA",
  authDomain: "reactjsdiego.firebaseapp.com",
  projectId: "reactjsdiego",
  storageBucket: "reactjsdiego.appspot.com",
  messagingSenderId: "84721051746",
  appId: "1:84721051746:web:3d0c5196d6009d17f1093b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//consulta a la BDD
const bdd = getFirestore()

/*
Create
Read
Udape
Detele
*/

//CREAR PRODUCTOS

const prods = [
  {
      "title": "1 kg de miel",
      "size": "1kg",
      "price": 8,
      "stock": 500,
      "img": "https://firebasestorage.googleapis.com/v0/b/reactjsdiego.appspot.com/o/1.png?alt=media&token=ce341ebc-1671-4220-9cf2-b2a28daa479c",
      "category": "menos de 100, menor"
  },
  {
    "title": "2 kg de miel",
    "size": "2kg",
    "price": 14,
    "stock": 200,
    "img": "https://firebasestorage.googleapis.com/v0/b/reactjsdiego.appspot.com/o/2.png?alt=media&token=2a77b0ee-e2bd-4ebd-b319-118f3364dc89",
    "category": "menos de 100, menor"
  },
  {
    "title": "3 kg de miel",
    "size": "3kg",
    "price": 21,
    "stock": 200,
    "img": "https://firebasestorage.googleapis.com/v0/b/reactjsdiego.appspot.com/o/3.png?alt=media&token=96e45d5f-1bc2-4ad9-a7f4-be37b8c645e7",
    "category": "menos de 100, menor"
  },
  {
    "title": "30 kg de miel",
    "size": "30kg",
    "price": 200,
    "stock": 500,
    "img": "https://firebasestorage.googleapis.com/v0/b/reactjsdiego.appspot.com/o/4.png?alt=media&token=2d651e8c-8aab-4fcc-a3d2-4cddc6eb24c6",
    "category": "menos de 100, menor"
  }
]


export const createProducts = async () => {
    try {  
          prods.forEach(async (prod) => {
              const rta = await addDoc(collection(bdd, "productos"), {
                  title: prod.title,
                  size: prod.size,
                  price: prod.price,
                  stock: prod.stock,
                  category: prod.category,
                  img: prod.img
              })
              console.log(rta)
          })
    }  catch (e) {
      console.log(e)
    }
}

createProducts()

// Consultar productos
export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"))
  const items = productos.docs.map(prod => { return { ...productos.data(), id: productos.id } })
  return items
}

//Consultar producto
export const getProduct = async (id) => {
  const producto = await getDoc(doc(bdd, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
  await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
  await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
      cliente: cliente,
      items: carrito,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  return item
}