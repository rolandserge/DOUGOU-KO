import Image from 'next/image';
import React from 'react';
import LoadingImage from "../Assets/Loading.png"

const Loading = () => {
     return (
          <div className='loading'>
               <div>
                    <Image src={LoadingImage} alt='image de chargement' className='logo' width={110} priority />
               </div>
          </div>
     );
};

export default Loading;