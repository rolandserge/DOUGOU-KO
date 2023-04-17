
import { configureStore } from '@reduxjs/toolkit'
import produitSlice from './Reducer/produitReducer'

const store = configureStore({
     reducer: {
          produits: produitSlice
     },
})

export default store