import React from 'react'
import Logo from '../Assets/LogoDk.png'
import Image from "next/image"
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegUser } from "react-icons/fa"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { useCart } from 'react-use-cart'
import { useViewportSize } from '@mantine/hooks';
import { useRouter } from 'next/router'
import { useAuth } from '../Hooks/auth';

const Header = () => {

     const { totalItems } = useCart()
     const router = useRouter()
     const { width } = useViewportSize();

     const { user } = useAuth()

     return (
          <header>
               <div className='container_header'>
                    <div className='logo_div' onClick={() => router.push('/')}>
                         <Image src={Logo} className='logo' alt="le logo de DOUGOU'KO" />
                    </div>
                    {
                         width <= 1200 ? 
                         <div className='notif' onClick={() => router.push('/Panier')}>
                              <div className='icone'>
                                   <HiOutlineShoppingBag />
                              </div>
                              <span className='nombre'>
                                   { totalItems }
                              </span>
                         </div> 
                         :
                         <div className='large_ecran'>
                              {
                                   user ? 
                                   <Link href='/Profil' className="element user">
                                        <div className="icone user">
                                             <FaRegUser />
                                        </div>
                                        <p>Mon compte</p>
                                   </Link>
                                   :
                                        <Link href='/Auth/login' className="element user">
                                             <div className="icone user">
                                                  <FaRegUser />
                                             </div>
                                             <p>Se connecter</p>
                                        </Link>
                              }
                              <Link href='#' className="element">
                                   <div className="icone">
                                        <AiOutlineHeart />
                                   </div>
                                   <span className="fav">10</span>
                              </Link>
                              <Link href='/Panier' className="element">
                                   <div className='icone'>
                                        <HiOutlineShoppingBag />
                                   </div>
                                   <span className='nombre'>
                                        { totalItems }
                                   </span>
                              </Link>
                         </div> 
                    }
               </div>
          </header>
     );
};

export default Header;