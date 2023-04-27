import React from 'react';
import { TbHome } from "react-icons/tb"
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link';
import { IoNotificationsOutline } from "react-icons/io5"
import { useAuth } from '../Hooks/auth';

const Navbar = () => {

     const { user } = useAuth()

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
               <Link href='/' className="nav">
                    <span>
                         <IoNotificationsOutline />
                         <div className='nb'>
                              { 1 }
                         </div>
                    </span>
                    <p>Notif</p>
               </Link>
               {
                    user ?
                         <Link href='/' className="nav">
                              <span>
                                   <AiOutlineUser />
                              </span>
                              <p>Profile</p>
                         </Link>
                    :
                         <Link href='/Auth/login' className="nav">
                              <span>
                                   <AiOutlineUser />
                              </span>
                              <p>Se connecter</p>
                         </Link>
               }
          </nav>
     );
};

export default Navbar;