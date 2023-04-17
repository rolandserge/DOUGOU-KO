import React from 'react';
import CardVente from './CardVente';
import { useCart } from "react-use-cart";
import { Carousel } from '@mantine/carousel';
import { produits } from '../../Data/Produits';



const Vente = () => {

     const { addItem } = useCart();
     
     return (
         <section className='top_vente'>
               <div className='titre'>
                    <p>Nos top ventes</p>
               </div>
               <div className='vente_produit'>
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
                              produits.filter(x => x.top == true).map((produit, index) => (
                                   <Carousel.Slide>
                                        <CardVente produit={produit} key={index}/>
                                   </Carousel.Slide>
                              ))
                         }
                    </Carousel>
               </div>
         </section>
     );
};

export default Vente;