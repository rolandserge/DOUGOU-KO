import React from 'react';
import Vide from "../../Assets/vide.png"
import Image from 'next/image';
import Link from 'next/link';

const PanierVide = () => {
     return (
          <div className='panier_vide'>
               <div className='container_image'>
                    <div className='image_div'>
                         <Image src={Vide} alt='Illustration de panier vide' className='image' />
                    </div>
               </div>
               <div className='vide_titre'>
                    <h3>Votre panier est vide</h3>
               </div>
               <div className='achat_div'>
                    <Link href="/Produit?categorie=1" className='achat'>Faire des achats</Link>
               </div>
          </div>
     );
};

export default PanierVide;