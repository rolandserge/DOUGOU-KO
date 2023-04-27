import React from 'react';
import Terminer from "../../../Assets/terminer.jpg"
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../Assets/LogoDk.png"
import { useAuth } from '../../../Hooks/auth';
const Finish = () => {

     const { user } = useAuth({middleware: "auth"})
     
     return (
          <div className='terminer'>
               <Link href="/" className='logo_div'>
                    <Image src={Logo} alt="Le logo de l'entreprise" width={150} />
               </Link>
               <div className='commande'>
                    <h3>Votre commande a ete prise en compte avec sucess</h3>
               </div>
               <div className='container_image'>
                    <div className='image_div'>
                         <Image src={Terminer} className='image' alt='Image de fin de commande' priority />
                    </div>
               </div>
               <div className='retour'>
                    <Link href="/" className='link'>Faire d'autre achat</Link>
               </div>
          </div>
     );
};

export default Finish;