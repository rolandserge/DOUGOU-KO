import React, { useState } from 'react';
import { useCart } from "react-use-cart";
import Cart from '../../../Component/Panier/Cart';
import Nav from '../../../Layouts/Nav';
import { Radio } from '@mantine/core';
import Livraison from "../../../Assets/courrier-de-livraison.png"
import Ligne from "../../../Assets/achats-en-ligne.png"
import { useRouter } from 'next/router';
import Image from 'next/image';

const index = () => {

     const { isEmpty ,cartTotal, items } = useCart();

     const router = useRouter()
      
        if (isEmpty) return <p>Your cart is empty</p>;

        const [value, setValue] = useState('react')
        

     const InfoLivraison = (e) => {

          e.preventDefault();

          alert("ca marche");
     }

     return (
          <>
          <Nav titre='Votre panier' retour="/Produit?categorie=1" />
         <section className='container_panier'>
               <div className="contenu_panier">
                    <div className="cards_paniers">
                         {
                              items.map((item, index) => (

                                   <Cart item={item} key={index} />
                              ))
                         }
                    </div>
                    <div className='totaux_card'>
                         <div className='titre'>
                              <p>Resumé du Panier</p>
                         </div>
                         <div className='sous_total'>
                              <div>
                                   <p>Sous total</p>
                              </div>
                              <div>
                                   <span>{cartTotal.toLocaleString("fr-FR")} FCFA</span>
                              </div>
                         </div>
                         <div className='sous_total'>
                              <div>
                                   <p>Livraison</p>
                              </div>
                              <div>
                                   <span>Gratuite</span>
                              </div>
                         </div>
                         <div className='totaux'>
                              <div>
                                   <p>Prix total</p>
                              </div>
                              <div>
                                   <span>{cartTotal.toLocaleString("fr-FR")} FCFA</span>
                              </div>
                         </div>
                    </div>
                    <div className="livraison_containers">
                         <div onClick={open}>
                              <p>Informations de Livraisons</p>
                         </div>
                         <div className='formulaire'>
                              <form action="" method='post' onSubmit={InfoLivraison}>
                                   <div className='form'>
                                        <label htmlFor="">Entrer votre et prenom</label>
                                        <input type="text" required name="" id="" />
                                   </div>
                                   <div className='form'>
                                        <label htmlFor="">Entrer votre numero</label>
                                        <input type="number" required name="" id="" />
                                   </div>
                                   <div className='form'>
                                        <label htmlFor="">Adresse de livraison</label>
                                        <input type="text" required name="" id="" />
                                   </div>
                                   <div className='form'>
                                        <label htmlFor="">Entrer votre e-mail</label>
                                        <input type="email" required name="" id="" />
                                   </div>
                                   <div >
                                        <Radio.Group
                                             value={value}
                                             onChange={setValue}
                                             label="Choissisez votre moyen de payement"
                                             mt={10}
                                             mb={30}
                                             className='payement'
                                             withAsterisk
                                        >    <div className='livraison_div'>
                                                  <div className='livraison_image'>
                                                       <Image src={Livraison} width={50} className='image' alt='Payement a la livraison' />
                                                  </div>
                                                  <Radio value="livraison" required id='radio' label="Payer a la livraison" />
                                             </div>
                                             <div className='livraison_div'>
                                                  <div className='ligne_image'>
                                                       <Image width={50}  src={Ligne} className='image' alt='Payement en ligne' />
                                                  </div>
                                                  <Radio value="svelte" id='radio' disabled label="Payer en ligne" />
                                             </div>
                                        </Radio.Group>
                                   </div>
                                   <div className='valider'>
                                        <button>Commander</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
         </section>
         </>
     );
};

export default index;