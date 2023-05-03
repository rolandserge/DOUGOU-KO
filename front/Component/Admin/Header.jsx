import React from 'react';
import Logo from "../../Assets/LogoDk.png";
import Image from 'next/image';
const Header = () => {
     return (
          <div className='header_admin'>
               <div className="logo_admin">
                    <Image src={Logo} alt='logo DougouKo' width={80} style={{objectFit:"fill"}} priority={true} unoptimized={true} className='logo' />
               </div>
               <div className='user_info'>
                    <div className='rond'>
                         <p>sr</p>
                    </div>
                    <div className='nom'>
                         <p>Komenan roland serge</p>
                    </div>
               </div>
          </div>
     );
};

export default Header;