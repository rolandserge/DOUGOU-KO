import React from 'react';
import { useCart } from "react-use-cart";
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import { AiOutlineDelete } from "react-icons/ai"

const Cart = ({item}) => {

     const { updateItemQuantity, removeItem } = useCart();

     const { enqueueSnackbar } = useSnackbar()

     const SupprimerProduit = (id) => {
          
          removeItem(id)
          enqueueSnackbar('Produit supprimé du panier', {variant: "success"})
     }

     return (
          <div className="card_panier">
               <div className='image_produit'>
                    <Image src={item.image} alt='Image du produit' priority className='image' />
               </div>
               <div className='detail_div'>
                    <div className='name_produit'>
                         <p>{item.name}</p>
                    </div>
                    <div className='price'>
                         <span>{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</span>
                    </div>
                    <div className='action_div'>
                         <div className='action_quantite'>
                              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                         </div>
                         <div className='delete_button' onClick={() => SupprimerProduit(item.id)}>
                              <AiOutlineDelete />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Cart;