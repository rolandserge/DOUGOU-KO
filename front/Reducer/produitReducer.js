import { createSlice } from "@reduxjs/toolkit"
import { produits } from "../Data/Produits";

const initialState = {
     produits: [],
     error: false,
     loading: true
}


export const produitSlice = createSlice({
     name: 'produits',
     initialState,
     reducers: {
          AllProduits : (state, action) => {
               state.produits = action.payload
          },
          DetailProduit : (state, action) => {

               const find = produits.filter(item => item.id == action.payload);

               if(Object.keys(find).length >= 1) {

                   state.produits = find
                    state.loading = false
                    state.error = false
               } else {
                    
                    state.error = true
               }
          },

          ProduitCategories : (state, action) => {

               if(action.payload == 1) {

                    state.produits = produits

               } else {

                    state.produits = produits.filter(item => item.categorie == action.payload);
               }
          }
     },
})

export const { AllProduits, DetailProduit, ProduitCategories } = produitSlice.actions

export default produitSlice.reducer