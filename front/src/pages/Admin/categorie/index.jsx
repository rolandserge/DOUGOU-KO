import React from 'react';
import AdminLayout from '../../../../Layouts/AdminLayout';
import Loading from '../../../../Component/Loading';
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit, CiSearch } from 'react-icons/ci'
import { Table, TextInput } from '@mantine/core';
import { HiEye } from "react-icons/hi"
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

const index = ({categories}) => {

     const rows = categories.map((categorie, index) => (
          <tr key={index}>
               <td>{categorie.id}</td>
               <td><Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${categorie.image}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${categorie.image}`} width={50} height={50} unoptimized={true} priority={true} alt={categorie.name} /></td>
               <td>{categorie.name}</td>
               <td><HiEye /></td>
               <td><AiOutlineDelete /></td>
               <td><CiEdit /></td>
          </tr>
        ));
          if(!categories) {

               return <Loading />
          }


     return (
          <>
               <div className="produit_admin_entete">
                    <div className='produit'>
                         <p>Listes des categories</p>
                    </div>
                    <div className='recherche_prod'>
                         <TextInput className='input_search' placeholder="Rechercher des produits" icon={<CiSearch/>} />
                    </div>
                    <div className='ajouter_produit'>
                         <Link href="/Admin/categorie/ajouter" className='add'>Ajouter une categorie</Link>
                    </div>
               </div>
               <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                         <tr>
                              <th>Id</th>
                              <th>Image</th>
                              <th>Nom de la categorie</th>
                              <th colSpan={3}>Action</th>
                         </tr>
                    </thead>
                    <tbody>{rows}</tbody>
               </Table>
          </>
     );
};

export default index

index.PageLayout = AdminLayout

export const getStaticProps = async () => {

     const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`)

     return {
          props:{
               categories: res.data.data
          }
     }
}