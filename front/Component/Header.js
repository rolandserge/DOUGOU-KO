import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5"
import { HiOutlineMenu } from "react-icons/hi"
import Logo from '../Assets/LogoDk.png'
import Image from "next/image"

const Header = () => {
     return (
          <header>
               <div className='container_header'>
                    <div className='menu'>
                         <HiOutlineMenu />
                    </div>
                    <div className='logo_div'>
                         <Image src={Logo} className='logo' alt="le logo de DOUGOU'KO" />
                    </div>
                    <div className='notif'>
                        <IoNotificationsOutline />
                        <div>
                         50
                        </div>
                    </div>
               </div>
          </header>
     );
};

export default Header;