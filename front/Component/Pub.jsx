import Image from 'next/image';
import React from 'react';
import Banner from "../Assets//banner1.png"

const Pub = () => {
     return (
         <section className='publicité'>
               <Image src={Banner} alt='Image de publicité' className='image' priority />
         </section>
     );
};

export default Pub;