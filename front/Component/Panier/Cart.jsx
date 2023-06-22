import React from 'react';
import { useCart } from "react-use-cart";
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import { AiOutlineDelete } from "react-icons/ai"
import { useRouter } from 'next/router';

const Cart = ({item}) => {

     const { updateItemQuantity, removeItem } = useCart();

     const { enqueueSnackbar } = useSnackbar()
     const router = useRouter()

     const SupprimerProduit = (id) => {
          
          removeItem(id)
          enqueueSnackbar('Produit supprimé du panier', {variant: "success"})
     }

     return (
          <div className="card_panier">
               <div className='image_produit' onClick={() => router.push(`Produit/${item.id}`)}>
                    <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`} unoptimized={true} width={50} height={50} alt={item.name} priority className='image' />
               </div>
               <div className='detail_div'>
                    <div className='name_produit'>
                         <p>{item.name}</p>
                    </div>
                    <div className='price'>
                         <span>{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</span>
                         <span className='reduction'>{(item.price + item.reduction).toLocaleString("fr-FR") + " FCFA"}</span>
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