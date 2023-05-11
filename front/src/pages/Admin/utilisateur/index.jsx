import React from "react"
import AdminLayout from "../../../../Layouts/AdminLayout"
import axios from "axios"
import { CiSearch } from 'react-icons/ci'
import { AiOutlineDelete } from "react-icons/ai"
import { Table, TextInput } from '@mantine/core';
import { HiEye } from "react-icons/hi"

const index = ({utilisateurs}) => {

     const rows = utilisateurs.map((utilisateur, index) => (
          <tr key={index}>
            <td>{utilisateur.id}</td> 
            <td>{utilisateur.nom}</td>
            <td>{utilisateur.email}</td>
            <td className="action"><span><HiEye /></span></td>
            <td className="action"><span><AiOutlineDelete /></span></td>
          </tr>
        ));

          if(!utilisateurs) {

               return <Loading />
          }

     return (
          <>
               <div className="produit_admin_entete">
                    <div className='produit'>
                         <p>Listes des utilisateurs</p>
                    </div>
                    <div className='recherche_prod'>
                         <TextInput className='input_search' placeholder="Rechercher des produits" icon={<CiSearch/>} />
                    </div>
               </div>
               <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                         <tr>
                              <th>#id</th>
                              <th>Nom</th>
                              <th>Adresse email</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>{rows}</tbody>
               </Table>
          </>
     )
}

export default index

index.PageLayout = AdminLayout

export async function getStaticProps() {
     // code
     const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/utilisateurs`)

     return {
          props: {
               utilisateurs: res.data.data
          },
     }
}