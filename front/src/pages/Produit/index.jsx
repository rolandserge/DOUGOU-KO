import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { categories } from '../../../Data/Categories';
import ProductCard from '../../../Component/Produit/ProductCard';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ProduitCategories } from '../../../Reducer/produitReducer';
import Nav from '../../../Layouts/Nav';


const index = () => {

     const [active, setActive] = useState()
     const [check, setCheck ] = useState(true)

     const router = useRouter()
     const dispatch = useDispatch()
     const { categorie } = router.query
     const { produits } = useSelector(item => item.produits)

     useEffect(() => {
          dispatch(ProduitCategories(categorie))
     }, [dispatch, categorie])

     const FilterCategorie = (categorie) => {
          dispatch(ProduitCategories(categorie))
          setActive(categorie)
          setCheck(false)
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

     return (
          <>
          <Nav titre="Listes des produits" retour="/"/>
          <section className='produits_pages'>
               <div className="categories_all">
                    <Swiper
                         spaceBetween={8}
                         slidesPerView={2.5}
                    >
                         {
                              categories.map((categorie, index) =>
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
                         produits.map((produit, index) => (
                              <ProductCard produit={produit} key={index} />
                         ))
                    }
               </div>
          </section>
          </>
     );
};

export default index;