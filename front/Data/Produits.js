import Pc from '../Assets/pc.jpg'
import Telephone from "../Assets/telephone1.png"
import Homme from "../Assets/mode 1.jpg"
import Femme1 from "../Assets/mode femme 2.jpg"
import Femme from "../Assets/mode femme.jpg"
import Art1 from "../Assets/data/Art & Deco/art1.jpg"
import Art2 from "../Assets/data/Art & Deco/art2.webp"
import Art3 from "../Assets/data/Art & Deco/art3.jpg"
import Art4 from "../Assets/data/Art & Deco/art4.jpg"
import Electro1 from "../Assets/data/Electro/images (8).jpg"
import Electro2 from "../Assets/data/Electro/images (9).jpg"
import Electro3 from "../Assets/data/Electro/téléchargement (12).jpg"
import Electro4 from "../Assets/data/Electro/téléchargement (13).jpg"
import Info1 from "../Assets/data/Informatique/images (10).jpg"
import Info2 from "../Assets/data/Informatique/images (12).jpg"
import Info3 from "../Assets/data/Informatique/images (11).jpg"
import Info4 from "../Assets/data/Informatique/images (8).jpg"
import Aubergine from "../Assets/data/Marché/aubergine.jpg"
import Banane from "../Assets/data/Marché/Banne douce.jpg"
import Carrote from "../Assets/data/Marché/Carrote.jpg"
import Feuille from "../Assets/data/Marché/Feuille Verte.jpg"
import Homme1 from "../Assets/data/Mode Homme/chemise.jpg"
import Homme2 from "../Assets/data/Mode Homme/chemises.jpg"
import Homme3 from '../Assets/data/Mode Homme/mode.jpg'
import Homme4 from "../Assets/data/Mode Homme/pull.jpg"
import Femme2 from "../Assets/data/Mode Femme/fashon.jpg"
import Femme3 from '../Assets/data/Mode Femme/Fashon1.jpg'
import Femme4 from "../Assets/data/Mode Femme/fashon2.png"
import Femme5 from "../Assets/data/Mode Femme/fashon3.jpg"
import Phone1 from "../Assets/data/Portable & Tablette/complet.jpg"
import Phone2 from "../Assets/data/Portable & Tablette/iphone.jpg"
import Phone3 from "../Assets/data/Portable & Tablette/tablette.jpg"
import Phone4 from "../Assets/data/Portable & Tablette/phone6.jpg"


export const produits = [
     {
          id: 1,
          name: 'Telephone Portable',
          price: 50000,
          quantity: 100,
          image: Telephone,
          top: true,
          categorie: 6,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 3,
          name: 'Modele habit homme',
          price: 5000,
          quantity: 100,
          image: Homme,
          top: true,
          categorie: 4,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 4,
          name: 'Modele de femme',
          price: 7000,
          quantity: 100,
          image: Femme1,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 5,
          name: 'Jolie petit modele de sortie',
          price: 8000,
          quantity: 100,
          image: Femme,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 6,
          name: 'Ordinateur Portable HP Pavillon',
          price: 170000,
          quantity: 100,
          image: Pc,
          top: false,
          categorie: 8,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 7,
          name: 'Salle de decor 1',
          price: 18000,
          quantity: 100,
          image: Art1,
          top: true,
          categorie: 2,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 8,
          name: 'Electro manager 1',
          price: 1700,
          quantity: 100,
          image: Electro1,
          top: false,
          categorie: 7,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 9,
          name: 'Mode femme 1',
          price: 3000,
          quantity: 100,
          image: Femme2,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 10,
          name: 'Mode homme 1',
          price: 9000,
          quantity: 100,
          image: Homme1,
          top: false,
          categorie: 4,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 11,
          name: 'Telephone Portable 1',
          price: 80000,
          quantity: 100,
          image: Phone1,
          top: true,
          categorie: 6,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 12,
          name: 'Materiel informatique 1',
          price: 120000,
          quantity: 100,
          image: Info1,
          top: false,
          categorie: 8,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 13,
          name: 'Aubergine',
          price: 1000,
          quantity: 100,
          image: Aubergine,
          top: false,
          categorie: 5,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 2,
          name: 'Salle de decor 2',
          price: 15000,
          quantity: 100,
          image: Art2,
          top: true,
          categorie: 2,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 15,
          name: 'Electro manager 2',
          price: 1500,
          quantity: 100,
          image: Electro2,
          top: false,
          categorie: 7,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 16,
          name: 'Mode femme 2',
          price: 4000,
          quantity: 100,
          image: Femme3,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 17,
          name: 'Mode homme 2',
          price: 2000,
          quantity: 100,
          image: Homme2,
          top: false,
          categorie: 4,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 18,
          name: 'Telephone Portable 2',
          price: 17000,
          quantity: 100,
          image: Phone2,
          top: false,
          categorie: 6,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 19,
          name: 'Materiel informatique 2',
          price: 30000,
          quantity: 100,
          image: Info2,
          top: false,
          categorie: 8,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 20,
          name: 'Feuille epinare',
          price: 600,
          quantity: 100,
          image: Feuille,
          top: false,
          categorie: 5,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 21,
          name: 'Salle de decor 3',
          price: 70000,
          quantity: 100,
          image: Art3,
          top: true,
          categorie: 2,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 22,
          name: 'Electro manager 3',
          price: 2000,
          quantity: 100,
          image: Electro3,
          top: false,
          categorie: 7,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 23,
          name: 'Mode femme 3',
          price: 6500,
          quantity: 100,
          image: Femme4,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 24,
          name: 'Mode homme 3',
          price: 12000,
          quantity: 100,
          image: Homme3,
          top: false,
          categorie: 4,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 25,
          name: 'Telephone Portable 3',
          price: 48000,
          quantity: 100,
          image: Phone3,
          top: false,
          categorie: 6,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 26,
          name: 'Materiel informatique 3',
          price: 130000,
          quantity: 100,
          image: Info3,
          top: false,
          categorie: 8,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 27,
          name: 'Carotte',
          price: 1500,
          quantity: 100,
          image: Carrote,
          top: false,
          categorie: 5,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 28,
          name: 'Salle de decor 4',
          price: 25000,
          quantity: 100,
          image: Art4,
          top: true,
          categorie: 2,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 29,
          name: 'Electro manager 4',
          price: 2500,
          quantity: 100,
          image: Electro4,
          top: false,
          categorie: 7,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 30,
          name: 'Mode femme 4',
          price: 9500,
          quantity: 100,
          image: Femme5,
          top: false,
          categorie: 3,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 31,
          name: 'Mode homme 4',
          price: 4000,
          quantity: 100,
          image: Homme4,
          top: false,
          categorie: 4,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 32,
          name: 'Telephone Portable 4',
          price: 40000,
          quantity: 100,
          image: Phone4,
          top: false,
          categorie: 6,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 33,
          name: 'Materiel informatique 4',
          price: 300000,
          quantity: 100,
          image: Info4,
          top: false,
          categorie: 8,
          description: "La descrption de notre telephone mobile"
     },
     {
          id: 13,
          name: 'Banane',
          price: 500,
          quantity: 100,
          image: Banane,
          top: false,
          categorie: 5,
          description: "La descrption de notre telephone mobile"
     },
    
]
