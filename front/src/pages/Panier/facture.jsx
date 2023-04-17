import React from 'react';
import Nav from '../../../Layouts/Nav';
import { useCart } from 'react-use-cart';
import Image from 'next/image';


const facture = () => {

     const { items } = useCart();

     var ladate = new Date()

     return (
          <div>
               <Nav titre="Recupalitif de ma commande" retour="/Panier" />
               <div className='container_recap'>
                    {
                         items?.map((item, index) => (
                              
                              <div className="card_panier" key={index}>
                                   <div className='image_produit'>
                                        <Image src={item.image} alt='Image du produit' priority className='image' />
                                   </div>
                                   <div className='detail_div'>
                                        <div className='name_produit'>
                                             <p>{item.name}</p>
                                        </div>
                                        <div className='action_div'>
                                             <div className='action_quantite'>
                                                  <span>{"Quantité : " + item.quantity}</span>
                                             </div>
                                        </div>
                                        <div className='price'>
                                             <span>{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</span>
                                        </div>
                                   </div>
                              </div>
                         ))
                    }
                    <div className="infos_livraison">
                         <div className="head">
                              <h3>Detail de livraison</h3>
                         </div>
                         <div className="card_livraison">
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Date</p>
                                   </div>
                                   <div className='infos'>
                                        {
                                             ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
                                        }
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Numero</p>
                                   </div>
                                   <div className='infos'>
                                        <p>07042191915</p>
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Adress E-mail</p>
                                   </div>
                                   <div className='infos'>
                                        <p>serge@gmail.com</p>
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Payement</p>
                                   </div>
                                   <div className='infos'>
                                        <p>A la livraison</p>
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Adresse de livraison</p>
                                   </div>
                                   <div className='infos'>
                                        <p>Cocody Abbata passant ehn dn plus de mon pays la vie et yopougon</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default facture;