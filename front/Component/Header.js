import React from 'react'
import Logo from '../Assets/LogoDk.png'
import Image from "next/image"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { useCart } from 'react-use-cart'
import { useRouter } from 'next/router'

const Header = () => {

     const { totalItems } = useCart()
     const router = useRouter()

     return (
          <header>
               <div className='container_header'>
                    <div className='logo_div'>
                         <Image src={Logo} className='logo' alt="le logo de DOUGOU'KO" />
                    </div>
                    <div className='notif' onClick={() => router.push('/Panier')}>
                         <div className='icone'>
                              <HiOutlineShoppingBag />
                         </div>
                         <div className='nombre'>
                              { totalItems }
                         </div>
                    </div> 
                           
               </div>
          </header>
     );
};

export default Header;