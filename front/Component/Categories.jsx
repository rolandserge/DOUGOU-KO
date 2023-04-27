import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Marche from "../Assets/marche.jpg"
import Link from 'next/link';
import useData from '../Hooks/data';

const Categories = () => {

     const { categories } = useData()
     
     return (
          <section className='categorie_cards_slider'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3.5}

               >
                    <SwiperSlide>
                         <Link href={`/Produit?categorie=1`} className='card_slider'>
                              <div className='icone_categorie'>
                                   <Image src={Marche} alt={'toutes les categories'} className='image' priority />
                              </div>
                              <span>{"Tous"}</span>
                         </Link>
                    </SwiperSlide>
                    {    
                         categories?.map((categorie, index) => (
                              <SwiperSlide key={index}>
                                   <Link href={`/Produit?categorie=${categorie.id}`} className='card_slider'>
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