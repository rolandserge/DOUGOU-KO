import Image from 'next/image';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import { useCart } from "react-use-cart";
import { useSnackbar } from 'notistack';
import Link from 'next/link';


const CardVente = ({produit}) => {

     const { addItem } = useCart();
     const { enqueueSnackbar } = useSnackbar()

     const AddCart = (produit) => {

          addItem(produit)
          enqueueSnackbar('Produit ajouter au panier', {variant: "success"})
     }

     return (
          <>
               <div className='card_produit'>
                    <div className='container_header'>
                         <Link href={`/Produit/${produit.id}`} className='container_image'>
                              <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.image}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.image}`} unoptimized={true} width={20} height={20} alt={produit.name} className='produit' />
                         </Link>
                         <div className='favoris active'>
                              <AiOutlineHeart />
                         </div>
                    </div>
                    <div className='container_detail'>
                         <Link href={`/Produit/${produit.id}`} className='name_product'>
                              <p>{produit.name}</p>
                         </Link>
                         <div className='reduction'>
                              <p>{produit.price + produit.reduction + " FCFA"}</p>
                         </div>
                         <div className='price_cart'>
                              <Link href={`/Produit/${produit.id}`} className='price'>{(produit.price).toLocaleString("fr-FR")} FCFA</Link>
                              <div className='add_cart' onClick={() => AddCart(produit)}>
                                   <HiOutlineShoppingBag />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default CardVente;