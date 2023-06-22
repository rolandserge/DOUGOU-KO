import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';

const Produit = ({produits}) => {

     return (
         <section className='container_produits'>
               <div className='head_produit'>
                    <div className='prod'>
                         <p>Nos différents produits</p>
                    </div>
               </div>
               <div className='produit_all'>
               {
                    produits?.slice(0, 10).map((produit, index) => (

                         <ProductCard produit={produit} key={index} />

                    )).reverse()
               }
               </div>
               <div className='voir'>
                    <Link href='/Produit?categorie=tous' className='voirplus'>Voir tous les produits</Link>
               </div>
         </section>
     );
};

export default Produit;