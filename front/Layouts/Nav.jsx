import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { MdOutlineKeyboardBackspace } from "react-icons/md"

const Nav = ({titre, retour}) => {

     const { totalItems } = useCart();
     const [monted, setMonted] = useState(false)

     useEffect(() => {

          setMonted(true)
     })

     return (
          <div className='nav_unique'>
               <div className='detail_nav'>
                    <Link href={retour} className='retour'>
                         <MdOutlineKeyboardBackspace />
                    </Link>
                    <div className='titre'>
                         <p>{titre}</p>
                    </div>
               </div>
               <Link href='/Panier' className='detail_panier'>
                    <div className='panier'>
                         <HiOutlineShoppingBag />
                    </div>
                    <div className='nb_items'>
                         <span>{monted && totalItems}</span>
                    </div>
               </Link>
          </div>
     );
};

export default Nav;