import React from 'react';
import { TbHome } from "react-icons/tb"
import { useCart } from "react-use-cart";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import Link from 'next/link';

const Navbar = () => {

     const { totalItems } = useCart();

     return (
          <nav>
               <Link href='/' className="nav active">
                    <span>
                         <TbHome />
                    </span>
                    <p>Home</p>
               </Link>
               <Link href='/' className="nav">
                    <span>
                         <AiOutlineHeart />
                    </span>
                    <p>Favoris</p>
               </Link>
               <Link href='/Panier' className="nav">
                    <span>
                         <HiOutlineShoppingBag />
                         <div className='nb'>
                              { totalItems }
                         </div>
                    </span>
                    <p>Panier</p>
               </Link>
               <Link href='/' className="nav">
                    <span>
                         <AiOutlineUser />
                    </span>
                    <p>Profile</p>
               </Link>
          </nav>
     );
};

export default Navbar;