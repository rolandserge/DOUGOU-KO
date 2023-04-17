import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';


const Produit = () => {

     const { produits } = useSelector((item) => item.produits)

     return (
         <section className='container_produits'>
               <div className='head_produit'>
                    <div className='prod'>
                         <p>Nos produits</p>
                    </div>
                    <div className='voir'>
                         <Link href='/Produit?categorie=1' className='voirplus'>Voir +</Link>
                    </div>
               </div>
               <div className='produit_all'>
               {
                    produits?.slice(0, 6).map((produit, index) => (

                         <ProductCard produit={produit} key={index} />
                    ))
               }
               </div>
         </section>
     );
};

export default Produit;