import React, { useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai"
import { Rating } from '@mantine/core';
import { useCart } from "react-use-cart";
import { HiOutlineShoppingBag } from "react-icons/hi"
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { DetailProduit } from '../../../Reducer/produitReducer';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Nav from '../../../Layouts/Nav';

const ProdutId = () => {

     const { addItem, inCart, items, getItem, updateItemQuantity } = useCart();

     
     const router = useRouter()
     const { id } = router.query
     const dispatch = useDispatch()
     
     const { enqueueSnackbar } = useSnackbar();
     
     const { produits, error } = useSelector(item => item.produits)
     
     const itemInCart = items.filter((i) => i.id == produits[0]?.id);


     useEffect(() => {

          if(error) {

               router.push('/')
          }
         
          dispatch(DetailProduit(id))

     }, [dispatch, id])

     const addCart = (produit) => {

          addItem(produit)
          enqueueSnackbar("Produit ajouter au panier", { variant: "success" })
          
     }
     return (
          <>
          <Nav titre='Detail du produit' retour="/Produit?categorie=1" />
         <section className='container_detail_produit'>
               <article>
                    {
                         Object.keys(produits).length == 0 ? "Loading page" : 
                         <>
                              <div className="contenu">
                                   <div className='card_image'>
                                        <Image src={produits[0]?.image} className='image' alt="detail du produit" priority />
                                        <div className='favoris'>
                                             <AiOutlineHeart />
                                        </div>
                                   </div>
                                   <div className='detail_produit'>
                                        <div className='element_div'>
                                             <div className='nom_eval'>
                                                  <p>{produits[0]?.name} </p>
                                                  <Rating fractions={2} size='1rem' className='ratings' value={4} readOnly />
                                             </div>
                                             <div className='element_price'>
                                                  <div className='price_div'>
                                                       <span>{(produits[0]?.price).toLocaleString("fr-FR")} FCFA</span>
                                                  </div>
                                                  <div className='action_div'>
                                                       {
                                                            inCart(produits[0].id) && <>
                                                                 <button onClick={() => updateItemQuantity(itemInCart[0]?.id, itemInCart[0].quantity - 1)}>-</button>
                                                                 <span>{itemInCart[0]?.quantity}</span>
                                                                 <button onClick={() => updateItemQuantity(itemInCart[0]?.id, itemInCart[0].quantity + 1)}>+</button>
                                                            </>
                                                       }
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='description_produit'>
                                             <p>Description</p>
                                             <div>
                                                 {
                                                  produits[0]?.description
                                                 }
                                             </div>
                                        </div>
                                        <div className='container_evaluations'>
                                             <div className='header_evaluations'>
                                                  <div>
                                                       <span>Evaluations & Commentaires</span>
                                                  </div>
                                                  <div className='val_div'>
                                                       <button>Evaluer le produit</button>
                                                  </div>
                                             </div>
                                             <div className='notes'>
                                                  <span>5.5 <AiOutlineStar /> </span>
                                                  <p> 12 commentaires</p>
                                             </div>
                                             <div className='commentaire_evaluations'>
                                                  <div className='evaluations_card'>
                                                       <div>
                                                            <Rating fractions={2} size='1rem' className='ratings' value={4} readOnly />
                                                       </div>
                                                       <div className='commentaire'>
                                                            <p>
                                                                 commentaire du produit le commen
                                                                 Lorem ipsum dolor sit amet, consectetur
                                                                 adipisicing elit. Ad quas hic aperiam libero perferendis maxime
                                                                 , eos ipsa dicta eveniet temporibus.
                                                            </p>
                                                       </div>
                                                       <div>
                                                            <span>Créer par auteur du commentaire</span>
                                                       </div>
                                                  </div>
                                                  <div className='evaluations_card'>
                                                       <div>
                                                            <Rating fractions={2} size='1rem' className='ratings' value={4} readOnly />
                                                       </div>
                                                       <div className='commentaire'>
                                                            <p>commentaire du produit</p>
                                                       </div>
                                                       <div>
                                                            <p>Creer par auteur du commentaire</p>
                                                       </div>
                                                  </div>
                                                  <div className='evaluations_card'>
                                                       <div>
                                                            <Rating fractions={2} size='1rem' className='ratings' value={4} readOnly />
                                                       </div>
                                                       <div className='commentaire'>
                                                            <p>commentaire du produit</p>
                                                       </div>
                                                       <div>
                                                            <p>By auteur du commentaire</p>
                                                       </div>
                                                  </div>
                                                  <div className='evaluations_card'>
                                                       <div>
                                                            <Rating fractions={2} size='1rem' className='ratings' value={4} readOnly />
                                                       </div>
                                                       <div className='commentaire'>
                                                            <p>commentaire du produit</p>
                                                       </div>
                                                       <div>
                                                            <p>By auteur du commentaire</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div>
                                                  <button>Voir plus</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>
                    }
               </article>
               <div className="add_produit">
                    {
                         Object.keys(produits).length == 0 ? "Loading page" : 
                         <>
                              <button className='add_cart' onClick={() => addCart(produits[0])}>
                                   <HiOutlineShoppingBag />
                                   <span>Ajouter au panier</span>
                              </button>
                         </>
                    }
               </div>
         </section>
         </>
     );
};

export default ProdutId;
