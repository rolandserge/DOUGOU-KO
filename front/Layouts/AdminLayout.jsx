import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react';
import Header from '../Component/Admin/Header';
import { RxDashboard } from "react-icons/rx"
import { HiOutlineCube, HiOutlineUsers } from "react-icons/hi"
import { BiCollection, BiArchive } from "react-icons/bi"

const AdminLayout = ({children}) => {

     const router = useRouter()

     const dashbord = [
          {
               icone: <RxDashboard />,
               nom: "Tableau de bord",
               lien: "/Admin"
          },
          {
               icone:  <BiArchive />,
               nom: "Commandes",
               lien: "/Admin/commande"
          },
          {
               icone: <BiCollection />,
               nom: "Categories",
               lien: "/Admin/categorie"
          },
          {
               icone: <HiOutlineCube />,
               nom: "Produits",
               lien: "/Admin/produit"
          },
          {
               
               icone: <HiOutlineUsers />,
               nom: "Utilisateurs",
               lien: "/Admin/utilisateur"
          }
     ]

     return (
          <>
               <Header />
               <div className="admin_layout_page">
                    <aside>
                         {
                              dashbord.map((element, index) => (
                                   <Link href={element.lien} key={index} className={router.pathname === element.lien ? "elements active" : "elements"}>
                                        <div className="icone">
                                             {element.icone}
                                        </div>
                                        <div className='titre'>
                                             <p>{element.nom}</p>
                                        </div>
                                   </Link>
                              ))
                         }
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