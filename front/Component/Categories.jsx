import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Marche from "../Assets/marche.jpg"
import Link from 'next/link';
import { categories } from '../Data/Categories';

const Categories = () => {
     
     return (
          <section className='categorie_cards_slider'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
               >
                    {
                         categories.map((categorie, index) => (
                              <SwiperSlide key={index}>
                                   <Link href={`/Produit?categorie=${categorie.id}`} className='card_slider'>
                                        <div className='icone_categorie'>
                                             <Image src={categorie.image} alt='illustration de categorie' className='image' />
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