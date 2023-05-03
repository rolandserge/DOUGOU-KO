import Link from 'next/link';
import React from 'react';
import Header from '../Component/Admin/Header';
import { RxDashboard } from "react-icons/rx"
import { HiOutlineCube, HiOutlineUsers } from "react-icons/hi"
import { BiCollection, BiArchive } from "react-icons/bi"

const AdminLayout = ({children}) => {

     return (
          <>
               <Header />
               <div className="admin_layout_page">
                    <aside>
                         <Link href="/Admin" className='elements active'>
                              <div className="icone">
                                   <RxDashboard />
                              </div>
                              <div className='titre'>
                                   <p>Tableau de bord</p>
                              </div>
                         </Link>
                         <Link href="/Admin/commande" className='elements'>
                              <div className="icone">
                                   <BiArchive />
                              </div>
                              <div className='titre'>
                                   <p>Commandes</p>
                              </div>
                         </Link>
                         <Link href="/Admin/categorie" className='elements'>
                              <div className="icone">
                                   <BiCollection />
                              </div>
                              <div className='titre'>
                                   <p>Categories</p>
                              </div>
                         </Link>
                         <Link href="/Admin/produit" className='elements'>
                              <div className="icone">
                                   <HiOutlineCube />
                              </div>
                              <div className='titre'>
                                   <p>Produits</p>
                              </div>
                         </Link> <Link href="#" className='elements'>
                              <div className="icone">
                                   <HiOutlineUsers />
                              </div>
                              <div className='titre'>
                                   <p>Utilisateurs</p>
                              </div>
                         </Link>
                    </aside>
                    <div className="contenu_page_admin">
                         <div className="page_contenu">
                              {children}
                         </div>
                    </div>
               </div>
          </>
     );
};

export default AdminLayout;