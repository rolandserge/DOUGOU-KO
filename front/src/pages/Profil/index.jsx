import React from 'react';
import Header from '../../../Component/Header';
import Avatar from "../../../Assets/avatar.jpg"
import { AiOutlineHeart } from 'react-icons/ai'
import Link from "next/link"
import { MdOutlineLogout } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"
import { BiArchive } from 'react-icons/bi'
import Image from 'next/image';

const index = () => {
     return (
          <>
               <Header />
               <div className='page_profil'>
                    <div className="head_profil">
                         <div className="image_profil">
                              <Image src={Avatar} alt='image de profil' priority unoptimized={true} className="image" />
                         </div>
                         <div className='info_user'>
                              <h3>Votre prenom</h3>
                              <p>roland@gmail.com</p>
                         </div>
                    </div>
                    <div className='main_profil'>
                         <div className='indication'>
                              <p>Mon compte Dougou'ko</p>
                         </div>
                         <div className='contenu_profil'>
                              <Link href="/Profil/commande" className='card_contenu'>
                                   <div className="icone">
                                        <BiArchive />
                                   </div>
                                   <div className='element'>
                                        <p>Mes commandes</p>
                                   </div>
                              </Link>
                              <Link href="#" className='card_contenu'>
                                   <div className="icone">
                                        <AiOutlineHeart />
                                   </div>
                                   <div className="element">
                                        <p>Mes favoris</p>
                                   </div>
                              </Link>
                              <Link href='#' className='card_contenu'>
                                   <div className="icone">
                                        <FaRegUser />
                                   </div>
                                   <div className='element'>
                                        <p>Mon profil</p>
                                   </div>
                              </Link>
                              <div className='card_contenu'>
                                   <div className="icone">
                                        <MdOutlineLogout />
                                   </div>
                                   <div className="element">
                                        <p>Deconnexion</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );   
};

export default index;