import React from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { HiOutlineShoppingBag } from "react-icons/hi"
import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { useCart } from 'react-use-cart';

const ProductCard = ({produit}) => {

     
     const { enqueueSnackbar } = useSnackbar()

     const { addItem } = useCart()


     const AddCart = (produit) => {

          addItem(produit)
          enqueueSnackbar('Produit ajouter au panier', {variant: "success"})
     }

     return (
          <div className='card_produit_all'>
               <div className='container_header'>
                    <Link className='container_image' href={`/Produit/${produit.id}`}  >
                         <Image src={produit.image} alt='Image du produit' className='produit' />
                    </Link>
                    <div className='favoris'>
                         <AiOutlineHeart />
                    </div>
               </div>
               <div className='container_detail'>
                    <Link href={`/Produit/${produit.id}`} className='name_product'>
                         <p>{produit.name}</p>
                    </Link>
                    <div className='price_cart'>
                         <Link href={`/Produit/${produit.id}`} className='price'>{(produit.price).toLocaleString("fr-FR")} FCFA</Link>
                         <div className='add_cart' onClick={() => AddCart(produit)}>
                              <HiOutlineShoppingBag />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;