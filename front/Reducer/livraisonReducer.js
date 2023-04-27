import { createSlice } from "@reduxjs/toolkit"

const initialState = {

     livraison: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('livraison') || '[]') : []
}


export const livraisonSlice = createSlice({
     name: 'livraison',
     initialState,
     reducers: {

          InfoLivraison : (state, action) => {

               state.livraison = action.payload

               typeof window !== 'undefined' && localStorage.setItem('livraison', JSON.stringify(state.livraison));
          
          },
          ClearLivraison : (state, action) => {

               state.livraison = []

               if (typeof window !== 'undefined') {

                    localStorage.setItem('livraison', state.livraison)
                }

          }
     },
})

export const { InfoLivraison, ClearLivraison  } = livraisonSlice.actions

export default livraisonSlice.reducer