import React, { useEffect, useState  } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai"
import { useCart } from "react-use-cart";
import { HiOutlineShoppingBag } from "react-icons/hi"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Nav from '../../../Layouts/Nav';
import Loading from '../../../Component/Loading';
import axios from 'axios';
import { Carousel } from '@mantine/carousel';
import CardVente from '../../../Component/TopVente/CardVente';


const ProdutId = ({produit, produits}) => {


     const { addItem, inCart, items, updateItemQuantity } = useCart();

     const [thumbsSwiper, setThumbsSwiper] = useState(null);
     
     const router = useRouter()

     const { enqueueSnackbar } = useSnackbar();
     const itemInCart = items.filter((i) => i.id == produit.id);

     useEffect(() => {

     }, [])

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
                         produit.length == 0 ? <Loading /> : 
                         <>
                              <div className="contenu">
                                   <div className="image_du_produit_div">
                                        <div className='card_image'>
                                             <Swiper
                                                  style={{
                                                       "--swiper-navigation-color": "#fff",
                                                       "--swiper-pagination-color": "#fff",
                                                       "--swiper-navigation-size": "1.8em",
                                                  }}
                                                  spaceBetween={10}
                                                  navigation={true}
                                                  thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                                  modules={[FreeMode, Navigation, Thumbs]}
                                                  className="mySwiper2"
                                                  >
                                                       {
                                                            produit.image.map(image => (

                                                                 <SwiperSlide>
                                                                      <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.url}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.url}`} unoptimized={true} className='image' width={0} height={0} alt={image.name} priority />
                                                                 </SwiperSlide>
                                                            ))
                                                       }
                                             </Swiper>
                                             <div className='favoris'>
                                                  <AiOutlineHeart />
                                             </div>
                                        </div>
                                        <div className='sous_image'>     
                                             <Swiper
                                                  onSwiper={setThumbsSwiper}
                                                  spaceBetween={8}
                                                  slidesPerView={4}
                                                  freeMode={true}
                                                  watchSlidesProgress={true}
                                                  modules={[FreeMode, Navigation, Thumbs]}
                                                  className="mySwiper"
                                                  >
                                                        {
                                                            produit.image.map((image, index) => (

                                                                 <SwiperSlide key={index}>
                                                                      <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.url}`} unoptimized={true} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.url}`} className='image' width={100} height={100} alt={image.name} priority />
                                                                 </SwiperSlide>
                                                            ))
                                                       }
                                             </Swiper>
                                        </div>
                                   </div>
                                   <div className='detail_produit'>
                                        <div className='element_div'>
                                             <div className='nom_eval'>
                                                  <p>{produit.name} </p>
                                             </div>
                                             <div className='categorie'>
                                                  <p>{produit.categorie.name}</p>
                                             </div>
                                        </div>
                                        <div className='element_price'>
                                             <div className='price_div'>
                                                  <span>{(produit.price).toLocaleString("fr-FR")} FCFA</span>
                                                  <span className='reduction'>{(produit.price + produit.reduction).toLocaleString("fr-FR") + " FCFA"}</span>
                                             </div>
                                             <div className='action_div'>
                                                  {
                                                       itemInCart.length >= 1 && <>
                                                            <button onClick={() => updateItemQuantity(itemInCart[0]?.id, itemInCart[0].quantity - 1)}>-</button>
                                                            <span>{itemInCart[0]?.quantity}</span>
                                                            <button onClick={() => updateItemQuantity(itemInCart[0]?.id, itemInCart[0].quantity + 1)}>+</button>
                                                       </>
                                                  }
                                             </div>
                                        </div>
                                        <div className='description_produit'>
                                             <p>Description</p>
                                             <div>
                                                 {
                                                  produit.description
                                                 }
                                             </div>
                                        </div>
                                   </div>
                                   <div className='autres_categories'>
                                        <div className='titre'>
                                             <p>Les produits de même catégorie</p>
                                        </div>
                                        <div className='slider_prod'>                                       
                                             <Carousel
                                                  slideSize="25%"
                                                  slideGap="md"
                                                  loop
                                                  align="start"
                                                  breakpoints={[
                                                  { maxWidth: 'md', slideSize: '50%' },
                                                  { maxWidth: 'sm', slideSize: '50%', slideGap: 8 },
                                                  ]}
                                             >
                                                  {
                                                       produits.filter(x => x.categorie.id == produit.categorie.id).map((produit, index) => (
                                                            <Carousel.Slide>
                                                                 <CardVente produit={produit} key={index}/>
                                                            </Carousel.Slide>
                                                       ))
                                                  }
                                             </Carousel>
                                        </div>
                                   </div>
                              </div>
                         </>
                    }
               </article>
               <div className="add_produit">
                    {
                         produit.length == 0 ? "" : 
                         <>
                             {
                                   itemInCart.length >= 1 ? 
                                        <Link href="/Panier" className='add_cart'>
                                             <HiOutlineShoppingBag />
                                             <span>Voir mon panier</span>
                                        </Link>
                                   :
                                        <button className='add_cart' onClick={() => addCart(produit)}>
                                             <HiOutlineShoppingBag />
                                             <span>Ajouter au panier</span>
                                        </button>
                             }
                         </>
                    }
               </div>
         </section>
         </>
     );
};

export default ProdutId;

export async function loadProduits() {

     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produits`);
     return response
   }

export async function getStaticPaths() {
     // code
     const res = await loadProduits()
  
     const ids = res.data.data.map((produit) => produit.id)

     return {
          fallback: false,
          paths: ids.map((id) => ({
               params: { id: id.toString() }
          })),
     }
}

export async function detailProduit(id) {

     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/detail-produit/${id}`)
     
     return response
}

export async function getStaticProps({params}) {
     // code
     const produit = await detailProduit(params.id)
     const produits = await loadProduits()

     return {
          props: {
               produit: produit.data.data[0],
               produits: produits.data.data
          },
     }
}

