import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../../../Component/Produit/ProductCard';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { ProduitCategories } from '../../../Reducer/produitReducer';
import Nav from '../../../Layouts/Nav';
import useData from '../../../Hooks/data';
import axios from 'axios';
import Loading from '../../../Component/Loading';

const index = ({produits}) => {

     const { categories } = useData()

     const [active, setActive] = useState()
     const [check, setCheck ] = useState(true)
     const [data, setData] = useState([])
     const router = useRouter()
     const dispatch = useDispatch()
     const { categorie } = router.query

     const FilterCategorie = (categorie) => {

          dispatch(ProduitCategories(categorie))
          setActive(categorie)
          setCheck(false)
          if(categorie == "tous") {
               setData(produits)
          } else {
               const filter = produits.filter((x) => x.categorie.name === categorie)
               setData(filter)
          }
     }

     const FilterData = () => {

          if(categorie == 1) {

              return produits

          } else {
  
              return produits.filter((x) => x.categorie.id == categorie)
          }
      }
      
     const ChangeClasse = (index) => {

          if(index == active) {
               return "active"
          } else if (categorie == index && check) {
               return "active"
          } 
          else {
               return 'simple'
          }
     }
     if(!produits || !categories) {

          return <><Loading /></>
     }
     return (
          <>
          <Nav titre="Listes des produits" retour="/"/>
          <section className='produits_pages'>
               <div className="accroche">
                    <div className="fond">

                    </div>
                    <div className='text'>
                         <p>Tous nos produis sont disponibles ici</p>
                    </div>
               </div>
               <div className="categories_all">
                    <Swiper
                         spaceBetween={8}
                         slidesPerView={2.5}
                         breakpoints={{
                              // when window width is >= 320px
                              // 320: {
                              // slidesPerView: 3.5,
                              // // spaceBetween: 20
                              // },
                              // // when window width is >= 480px
                            
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
                              <button className={ChangeClasse(1)} onClick={() => FilterCategorie(1)}>{'Tous'}</button>
                         </SwiperSlide>
                         {
                              categories?.map((categorie, index) =>
                                   (
                                        <SwiperSlide key={index}>
                                             <button className={ChangeClasse(categorie.id)} onClick={() => FilterCategorie(categorie.id)}>{categorie.name}</button>
                                        </SwiperSlide>
                                   )
                              )
                         }
                    </Swiper>
               </div>
               <div className="produit_all">
                    {
                         Object.keys(data).length >=1 ? data?.map((data, index) => (
                              <ProductCard produit={data} key={index} />
                         )) :

                         FilterData()?.map((produit, index) => (
                              <ProductCard produit={produit} key={index} />
                         ))
                    }
               </div>
          </section>
          </>
     );
};

export default index;

export async function loadProduits() {

     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produits`);
     return response
}
   
   export async function getStaticProps() {
     // code
     const res  = await loadProduits()
     const data = res.data.data
   
     return {
       props: {
           produits: data
       },
     }
   }