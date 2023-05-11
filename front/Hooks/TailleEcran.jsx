import React, { useEffect, useState } from 'react';


const TailleEcran = () => {

     const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

     useEffect(() => {

          function handleResize() {

               setScreenSize({
                 width: window.innerWidth,
                 height: window.innerHeight
               })
          }

          window.addEventListener('resize', handleResize);
          
          return () => window.removeEventListener('resize', handleResize);
     }, [])

     return screenSize;
};

export default TailleEcran;