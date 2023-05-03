import React from 'react';
import AdminLayout from '../../../../Layouts/AdminLayout';
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit, CiSearch } from 'react-icons/ci'
import { Table, TextInput } from '@mantine/core';
import { HiEye } from "react-icons/hi"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../../../../Component/Loading';

const index = ({produits}) => {
     
     const rows = produits.map((produit, index) => (
          <tr key={index}>
            <td><Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.image[0].url}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.image[0].url}`} width={50} height={50} unoptimized={true} priority={true} alt={produit.image[0].name} /></td>
            <td>{produit.name}</td>
            <td>{produit.price.toLocaleString("fr-FR") + " FCFA"}</td> 
            <td>{produit.stock}</td>
            <td>{produit.status}</td>
            <td>{produit.categorie.name}</td>
            <td><HiEye /></td>
            <td><AiOutlineDelete /></td>
            <td><CiEdit /></td>
          </tr>
        ));
          if(!produits) {
               return <Loading />
          }
     return (
          <>
               <div className="produit_admin_entete">
                    <div className='produit'>
                         <p>Listes des produits</p>
                    </div>
                    <div className='recherche_prod'>
                         <TextInput className='input_search' placeholder="Rechercher des produits" icon={<CiSearch/>} />
                    </div>
                    <div className='ajouter_produit'>
                         <Link href="/Admin/produit/ajouter" className='add'>Ajouter un produit</Link>
                    </div>
               </div>
               <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                         <tr>
                              <th>Image</th>
                              <th>Nom du produit</th>
                              <th>Prix</th>
                              <th>Quantité</th>
                              <th>Status</th>
                              <th>Categorie</th>
                              <th colSpan={3}>Action</th>
                         </tr>
                    </thead>
                    <tbody>{rows}</tbody>
               </Table>
          </>
     );
};

export default index;

index.PageLayout = AdminLayout

export const getStaticProps = async () => {

     const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produits`)

     return {
          props:{
               produits: res.data.data
          }
     }
}