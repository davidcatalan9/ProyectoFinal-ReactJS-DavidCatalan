
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXIQpW6ilcSJh_qKZU7_GjHjWXg7UM-DI",
    authDomain: "reatjs-1169c.firebaseapp.com",
    projectId: "reatjs-1169c",
    storageBucket: "reatjs-1169c.appspot.com",
    messagingSenderId: "640594661038",
    appId: "1:640594661038:web:7b446d8f698e138842a73f",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);


const products = [
    { id: 1, name: 'Reloj Mod Cas 1', marca: 'Casio', precio: 1000, foto: "casio1.jpg", cantidad: 1 },
    { id: 2, name: 'Reloj Mod Cas 2', marca: 'Casio', precio: 1200, foto: "casio2.jpg", cantidad: 1 },
    { id: 3, name: 'Reloj Mod Cas 3', marca: 'Casio', precio: 1400, foto: "casio3.png", cantidad: 1 },
    { id: 4, name: 'Reloj Mod Fes 1', marca: 'Festina', precio: 2300, foto: "festina1.jpg", cantidad: 1 },
    { id: 5, name: 'Reloj Mod Fes 2', marca: 'Festina', precio: 2800, foto: "festina2.png", cantidad: 1 },
    { id: 6, name: 'Reloj Mod Fes 3', marca: 'Festina', precio: 3300, foto: "festina3.png", cantidad: 1 },
    { id: 7, name: 'Reloj Mod Rol 1', marca: 'Rolex', precio: 9000, foto: "rolex1.jpg", cantidad: 1 },
    { id: 8, name: 'Reloj Mod Rol 2', marca: 'Rolex', precio: 9500, foto: "rolex2.jpg", cantidad: 1 },
    { id: 9, name: 'Reloj Mod Rol 3', marca: 'Rolex', precio: 9800, foto: "rolex3.png", cantidad: 1 },
    { id: 10, name: 'Reloj Mod Rol 4', marca: 'Rolex', precio: 9900, foto: "rolex4.jpg", cantidad: 1 },
];

// Agregar productos a Firebase Firestore
const addProductsToFirestore = async () => {
    const db = getFirestore(app); // Pasa la instancia de la aplicación a getFirestore
    const productsCollection = collection(db, "reloj");

    for (const product of products) {
        const productDocRef = doc(productsCollection, product.id.toString()); // Usa el ID del producto como nombre de documento

        try {
            await setDoc(productDocRef, product); // Usa setDoc para establecer los datos del documento
            console.log(`Producto agregado: ${product.name}`);
        } catch (error) {
            console.error(`Error al agregar producto: ${product.name}`, error);
        }
    }
};

// Ejecuta la función para agregar productos
addProductsToFirestore();
