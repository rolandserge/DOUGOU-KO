import React from 'react';
import CardVente from './CardVente';
import { useCart } from "react-use-cart";
import { Carousel } from '@mantine/carousel';
import useData from '../../Hooks/data';


const Vente = () => {

     const { addItem } = useCart();

     const { produits } = useData()
     
     return (
         <section className='top_vente'>
               <div className='titre'>
                    <p>Nos top ventes</p>
               </div>
               <div className='vente_produit'>
                    <Carousel
                         slideSize="20%"
                         slideGap="md"
                         loop
                         align="start"
                         breakpoints={[
                         { maxWidth: 'md', slideSize: '50%' },
                         { maxWidth: 'sm', slideSize: '50%', slideGap: 8 },
                         ]}
                    >
                         {
                              produits?.filter(x => x.top == 1).map((produit, index) => (
                                   <Carousel.Slide key={index}>
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