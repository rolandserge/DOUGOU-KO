import Image from 'next/image';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import { useCart } from "react-use-cart";
import Link from 'next/link';


const CardVente = ({produit}) => {

     const { addItem } = useCart();

     return (
          <>
               <div className='card_produit'>
                    <div className='container_header'>
                         <Link href={`/Produit/${produit.id}`} className='container_image'>
                              <Image src={produit.image} alt='Image du produit' className='produit' />
                         </Link>
                         <div className='favoris active'>
                              <AiOutlineHeart />
                         </div>
                    </div>
                    <div className='container_detail'>
                         <Link href={`/Produit/${produit.id}`} className='name_product'>
                              <p>{produit.name}</p>
                         </Link>
                         <div className='price_cart'>
                              <Link href={`/Produit/${produit.id}`} className='price'>{(produit.price).toLocaleString("fr-FR")} FCFA</Link>
                              <div className='add_cart' onClick={() => addItem(produit)}>
                                   <HiOutlineShoppingBag />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default CardVente;