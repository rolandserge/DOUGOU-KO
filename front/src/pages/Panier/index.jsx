import React, { useRef, useState } from 'react';
import { useCart } from "react-use-cart";
import Cart from '../../../Component/Panier/Cart';
import Nav from '../../../Layouts/Nav';
import { Radio, InputBase, Textarea } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import Livraison from "../../../Assets/courrier-de-livraison.png"
import Ligne from "../../../Assets/achats-en-ligne.png"
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import PanierVide from '../../../Component/Panier/PanierVide';
import { useDispatch, useSelector } from 'react-redux';
import { InfoLivraison } from '../../../Reducer/livraisonReducer';
import { useAuth } from '../../../Hooks/auth';
import { useSnackbar } from 'notistack';
import Header from '../../../Component/Header';
import { Carousel } from '@mantine/carousel';
import CardVente from '../../../Component/TopVente/CardVente';
import { useEffect } from 'react';
import useData from '../../../Hooks/data';


const index = () => {

     const { isEmpty ,cartTotal, items } = useCart();
     const [monted, setMonted] = useState(false)
     const { produits } = useData()
     const { livraison } = useSelector((item) => item.livraison);
     const { user } = useAuth()
     const dispatch = useDispatch()
     const [adresse, setAdresse] = useState()
     const payeRef = useRef()
     const numeroRef = useRef()
     const router = useRouter()
     const villeRef = useRef()
     const [value, setValue] = useState('react')
     const { enqueueSnackbar } = useSnackbar();
     const { width } = useViewportSize();

     useEffect(() => {
          setMonted(true)
     }, [])

     const DataInfoLivraison = (e) => {

          e.preventDefault();
          
          if(!user) {

               router.push("/Auth/login")
          }
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
               <Header />

          {
               isEmpty ? <PanierVide /> :
               <section className='container_panier'>
                         <div className='index'>
                              <p>Mon panier</p>
                         </div>
                         <div className="contenu_panier">
                              <div className="large_ecran">
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
                              </div>
                              <div className="livraison_containers">
                                   <div className='head_livraison'>
                                        <p>Informations de Livraisons</p>
                                   </div>
                                   <div className='formulaire'>
                                        <form action="" method='post' onSubmit={DataInfoLivraison}>
                                             <div className='form'>
                                                    <InputBase label="Votre numero de telephone" defaultValue={monted && livraison.numero} required ref={numeroRef} placeholder='Entrer votre numero ici' component={IMaskInput} mask="+226 00 00 00 00 00" />
                                             </div>
                                             <div>
                                                  <InputBase ref={villeRef} defaultValue={monted && livraison.ville} label="Veillez selectionner votre ville" required component="select" mt="md">
                                                       <option value="Ouagadougou">Ouagadougou</option>
                                                       <option value="Bobo-Dioulasso">Bobo-Dioulasso</option>
                                                  </InputBase>
                                             </div>
                                             <div className='form'>
                                                  <Textarea
                                                       placeholder="Entrer votre adresse de livraison"
                                                       label="Entrer votre adresse de livraison"
                                                       autosize
                                                       m="0.5em 0"
                                                       defaultValue={monted && livraison.adresse}
                                                       value={adresse} onChange={(event) => setAdresse(event.currentTarget.value)}
                                                       minRows={2}
                                                  />
                                             </div>
                                             <div >
                                                  <label htmlFor="">Choissisez votre moyen de paiement</label>
                                                  <Radio.Group
                                                       value={value}
                                                       onChange={setValue}
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
                              <div className='elements_interessant'>
                                   <div className='titre'>
                                        <p>Des produits qui peuvent vous intéresser</p>
                                   </div>
                                   <div className='slider_prod'>                                       
                                        <Carousel
                                             slideSize="23%"
                                             slideGap="md"
                                             loop
                                             align="start"
                                             breakpoints={[
                                                  { maxWidth: 'md', slideSize: '50%' },
                                                  { maxWidth: 'sm', slideSize: '50%', slideGap: 8 },
                                             ]}
                                             >
                                                  {
                                                       monted && produits?.map((produit, index) => (
                                                            <Carousel.Slide key={index}>
                                                                 <CardVente produit={produit} key={index}/>
                                                            </Carousel.Slide>
                                                       ))
                                                  }
                                        </Carousel>
                                   </div>
                              </div>
                         </div>
               </section>
          }
         </>
     );
};

export default index;