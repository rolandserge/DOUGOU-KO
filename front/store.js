
import { configureStore } from '@reduxjs/toolkit'
import produitSlice from './Reducer/produitReducer'
import livraisonSlice from './Reducer/livraisonReducer'

const store = configureStore({
     reducer: {
          produits: produitSlice,
          livraison: livraisonSlice
     },
})

export default store