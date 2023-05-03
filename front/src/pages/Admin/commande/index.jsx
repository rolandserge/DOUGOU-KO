import React from 'react';
import AdminLayout from '../../../../Layouts/AdminLayout';
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit, CiSearch } from 'react-icons/ci'
import { Table, TextInput } from '@mantine/core';
import { HiEye } from "react-icons/hi"
import axios from 'axios';

const index = ({commandes}) => {

     const rows = commandes.map((commande, index) => (
          <tr key={index}>
            <td>{commande.numero}</td>
            <td>{commande.totaux.toLocaleString("fr-FR") + " FCFA"}</td>
            <td>{commande.adresse}</td>
            <td>{commande.date}</td>
            <td>{commande.status}</td>
            <td>{commande.payement}</td>
            <td><HiEye /></td>
          </tr>
        ));

        if(!commandes) {

          return <Loading />
        }

     return (
          <>
               <div className="produit_admin_entete">
                    <div className='produit'>
                         <p>Listes des commandes</p>
                    </div>
                    <div className='recherche_prod'>
                         <TextInput className='input_search' placeholder="Rechercher des produits" icon={<CiSearch/>} />
                    </div>
                    {/* <div className='ajouter_produit'>
                         <Link href="#" className='add'>Ajouter un produit</Link>
                    </div> */}
               </div>
               <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                         <tr>
                              <th>Numero</th>
                              <th>Totaux</th>
                              <th>adresse</th>
                              <th>Date de commande</th>
                              <th>Status</th>
                              <th>Mode de payement</th>
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

export async function getStaticProps() {
     // code

     const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/commandes`)

     return {
          props: {
               commandes: res.data.data
          },
     }
}
