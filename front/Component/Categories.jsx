import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Marche from "../Assets/marche.jpg"
import Link from 'next/link';

const Categories = ({categories}) => {
     
     return (
          <section className='categorie_cards_slider'>
                <Swiper

                         spaceBetween={5}
                         slidesPerView={3.5}
                         // Responsive breakpoints
                         breakpoints={{
                         // when window width is >= 320px
                         // 320: {
                         // slidesPerView: 3.5,
                         // // spaceBetween: 20
                         // },
                         // // when window width is >= 480px
                         400: {
                              slidesPerView: 3.5,
                              // spaceBetween: 30
                         },
                         // // when window width is >= 640px
                         // 640: {
                         //      slidesPerView: 4.5,
                         //      // spaceBetween: 40
                         // },
                         1200: {
                              slidesPerView: 6.5,
                              // spaceBetween: 20
                         }
                    }}
               >
                    <SwiperSlide>
                         <Link href={`/Produit?categorie=tous`} className='card_slider'>
                              <div className='icone_categorie'>
                                   <Image src={Marche} alt={'toutes les categories'} className='image' priority />
                              </div>
                              <span>{"Tous"}</span>
                         </Link>
                    </SwiperSlide>
                    {    
                         categories?.map((categorie, index) => (
                              <SwiperSlide key={index}>
                                   <Link href={`/Produit?categorie=${categorie.name}`} className='card_slider'>
                                        <div className='icone_categorie'>
                                             <Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${categorie.image}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${categorie.image}`} alt={categorie.name} className='image' priority unoptimized={true} width={10} height={10} />
                                        </div>
                                        <span>{categorie.name}</span>
                                   </Link>
                              </SwiperSlide>
                         ))
                    }
               </Swiper>
          </section>
     );
};

export default Categories;