import React, { useRef, useState } from 'react';
import { useCart } from "react-use-cart";
import Cart from '../../../Component/Panier/Cart';
import Nav from '../../../Layouts/Nav';
import { Radio,InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import Livraison from "../../../Assets/courrier-de-livraison.png"
import Ligne from "../../../Assets/achats-en-ligne.png"
import { useRouter } from 'next/router';
import Image from 'next/image';
import PanierVide from '../../../Component/Panier/PanierVide';
import { useDispatch } from 'react-redux';
import { InfoLivraison } from '../../../Reducer/livraisonReducer';
import { useAuth } from '../../../Hooks/auth';
import { useSnackbar } from 'notistack';


const index = () => {

     const { isEmpty ,cartTotal, items } = useCart();
     const { user } = useAuth()
     const dispatch = useDispatch()
     const adresseRef = useRef()
     const payeRef = useRef()
     const numeroRef = useRef()
     const router = useRouter()
     const villeRef = useRef()
     const [value, setValue] = useState('react')
     const { enqueueSnackbar } = useSnackbar();

     const DataInfoLivraison = (e) => {

          e.preventDefault();
          
          if(!user) {

               router.push("/Auth/login")
          }

          const adresse = adresseRef.current.value
          const paye = payeRef.current.value
          const numero = numeroRef.current.maskRef.value
          const ville = villeRef.current.value
          
          if(numero.length < 19) {
               enqueueSnackbar("Le numero de telephone invalide", { variant: "error" })
          } else {
               dispatch(InfoLivraison({adresse, numero, paye, ville}))
               router.push("/Panier/facture")
          }
     }

     return (
          <>
          <Nav titre='Votre panier' retour="/Produit?categorie=1" />

          {
               isEmpty ? <PanierVide /> :
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
                                        <form action="" method='post' onSubmit={DataInfoLivraison}>
                                             <div className='form'>
                                                    <InputBase label="Votre numero de telephone" required ref={numeroRef} placeholder='Entrer votre numero ici' component={IMaskInput} mask="+226 00 00 00 00 00" />
                                             </div>
                                             <div>
                                                  <InputBase ref={villeRef} label="Veillez selectionner votre ville" required component="select" mt="md">
                                                       <option value="Ouagadougou">Ouagadougou</option>
                                                       <option value="Bobo-Dioulasso">Bobo-Dioulasso</option>
                                                  </InputBase>
                                             </div>
                                             <div className='form'>
                                                  <label htmlFor="">Adresse de livraison</label>
                                                  <input type="text" required ref={adresseRef} name="" id="" />
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
                                                            <Radio value="livraison" ref={payeRef} required id='radio' label="Payer a la livraison" />
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
          }
         </>
     );
};

export default index;