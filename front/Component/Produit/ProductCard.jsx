import React from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { HiOutlineShoppingBag } from "react-icons/hi"
import Image from 'next/image';
import Link from 'next/link';;
import { useSnackbar } from 'notistack';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';

const ProductCard = ({produit}) => {

     const { enqueueSnackbar } = useSnackbar()

     const router = useRouter()

     const { addItem } = useCart()


     const AddCart = (produit) => {

          addItem(produit)
          enqueueSnackbar('Produit ajouter au panier', {variant: "success"})
     }

     return (
          <div className='card_produit_all'>
               <div className='container_header'>
                    <div className='container_image' onClick={() => router.push(`/Produit/${produit.id}`)}  >
                         <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit?.image}`} unoptimized={true} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit?.image}`} priority width={50} height={50} alt={produit?.name} className='produit' />
                    </div>
                    <div className='favoris'>
                         <AiOutlineHeart />
                    </div>
               </div>
               <div className='container_detail'>
                    <div className='name_categorie'>
                         <p>{produit?.categorie?.name}</p>
                    </div>
                    <Link href={`/Produit/${produit.id}`} className='name_product'>
                         <p>{produit?.name}</p>
                    </Link>
                    <div className='fake_div'>
                         <Link href={`/Produit/${produit.id}`} className='fake'>{ produit?.price + produit?.reduction + " FCFA"}</Link>
                    </div>
                    <div className='price_cart'>
                         <Link href={`/Produit/${produit.id}`} className='price'>{(produit?.price).toLocaleString("fr-FR")} FCFA</Link>
                         <div className='add_cart' onClick={() => AddCart(produit)}>
                              <HiOutlineShoppingBag />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;