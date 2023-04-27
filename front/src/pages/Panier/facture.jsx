'use client'
import React, { useEffect, useState } from 'react';
import Nav from '../../../Layouts/Nav';
import { useCart } from 'react-use-cart';
import Image from 'next/image';
import { useAuth } from '../../../Hooks/auth';
import PanierVide from '../../../Component/Panier/PanierVide';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ClearLivraison } from '../../../Reducer/livraisonReducer';
import Loading from '../../../Component/Loading';


const facture = () => {

     const { cartTotal, items, isEmpty, emptyCart } = useCart();

     const [mounted ,setMounted] = useState(false)


     const { user } = useAuth({middleware: "auth"})

     const { livraison } = useSelector(item => item.livraison)

     const router = useRouter()
     const dispatch = useDispatch()

     var ladate = new Date()

     const Finish = () => {

          // dispatch(ClearLivraison())
          
          emptyCart()
          router.push('/Panier/Finish')
     }
     useEffect(() => {
          
          setMounted(true)

          if(Object.keys(livraison).length == 0 || isEmpty) {

               router.push('/Panier')
          }
     
     }, [])

     if(Object.keys(livraison).length == 0 || isEmpty) {

          return <Loading />
     }

     return (
          <div>
               <Nav titre="Recupalitif de ma commande" retour="/Panier" />
               <div className='container_recap'>
                    {
                         items?.map((item, index) => (
                              
                              <div className="card_panier" key={index}>
                                   <div className='image_produit'>
                                        <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image[0].url}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image[0].url}`} width={50} height={50} unoptimized={true} alt={item.image[0].name} priority className='image' />
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
                                        {
                                             mounted && <p>{ livraison?.numero }</p>
                                        }
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Adress E-mail</p>
                                   </div>
                                   <div className='infos'>
                                        <p>{ user?.email }</p>
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Payement</p>
                                   </div>
                                   <div className='infos'>
                                        <p>{ mounted && livraison?.paye}</p>
                                   </div>
                              </div>
                              <div className='card'>
                                   <div className='tete'>
                                        <p>Adresse de livraison</p>
                                   </div>
                                   <div className='infos'>
                                        <p>{mounted && livraison?.adresse }</p>
                                   </div>
                              </div>
                         </div>
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
                    <div className='terminer_button' onClick={Finish}>
                         <button>Valider votre commande</button>
                    </div>
               </div>
          </div>
     );
};

export default facture;
