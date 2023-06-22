import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     produits: [],
     filtre: [],
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

               if(Object.keys(find).length == 1) {

                    state.produits = find
                    state.loading = false

               } else {
                    
                    state.error = true
               }
          },

          ProduitCategories : (state, action) => {

               if(action.payload == 1) {

                    state.filtre = state.produits

               } else {

                    state.filtre = state.produits.filter(item => item.categorie.id == action.payload);
               }
          }
     },
})

export const { AllProduits, DetailProduit, ProduitCategories } = produitSlice.actions

export default produitSlice.reducer