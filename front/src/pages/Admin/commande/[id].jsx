import React, { useRef } from "react"
import AdminLayout from "../../../../Layouts/AdminLayout"
import Loading from '../../../../Component/Loading';
import Image from "next/image"
import { loadCommandes } from "../../../../Hooks/data"
import axiosAuth from "../../../../Libs/axios"
import { useSnackbar } from 'notistack';
import axios from "axios"
import { Table, InputBase, Button} from '@mantine/core';

const produit = ({produits, commande}) => {

     const statusRef = useRef()
     const dateRef = useRef()
     const { enqueueSnackbar } = useSnackbar();

     const rows = produits?.map((produit, index) => (
          <tr key={index}>
               <td>{produit.id}</td>
               <td><Image loader={() => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.image.produit.image}`} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${produit.produit.image}`} width={70} height={50} unoptimized={true} priority={true} alt={produit.produit.name} /></td>
               <td>{produit.produit.name}</td>
               <td>{produit.produit.price.toLocaleString("fr-FR") + " FCFA"}</td>
               <td>{produit.taille}</td>
               <td>{produit.quantite}</td>
               <td>{produit.totaux.toLocaleString("fr-FR") + " FCFA"}</td>
          </tr>
        ));

        if(!produits) {

          return <Loading />
        }

     const ChangeStatus = async(e) => {
          
          e.preventDefault()

          const status = statusRef.current.value
          const date = dateRef.current.value

          await axiosAuth.post(`/api/updatecommande/${commande.id}`, { date: date, status: status })
          .then((res) => {
               if(res.data.status == 200) {

                    enqueueSnackbar("Le status a été changé avec success", { variant: "success" })
               }
          })
          .catch(error => enqueueSnackbar("Une erreur s'est produite", { variant: "error" }))
     }

     return (
          <>
               <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                         <tr>
                              <th>id</th>
                              <th>Image</th>
                              <th>Nom du produit</th>
                              <th>price</th>
                              <th>Taille</th>
                              <th>quantité</th>
                              <th>Totaux</th>
                         </tr>
                    </thead>
                    <tbody>{rows}</tbody>
               </Table>
               <div className='container_commande'>
                    <div className="contenu_commande">
                         <div className="sous_total">
                              <div>
                                   <h4>Sous total</h4>
                                   <p>{commande.totaux.toLocaleString("fr-FR") + " FCFA"}</p>
                              </div>
                              <div>
                                   <h4>Livraison</h4>
                                   <p>Gratuite</p>
                              </div>
                              <div>
                                   <h4>Totaux</h4>
                                   <p>{commande.totaux.toLocaleString("fr-FR") + " FCFA"}</p>
                              </div>
                         </div>
                         <div className='changer_etat'>
                              <form onSubmit={ChangeStatus}>
                                   <div className="date">
                                        <label>Entrer la date de livraison</label>
                                        <input type='date' ref={dateRef} required />
                                   </div>
                                   <div>
                                        <InputBase ref={statusRef} label="Status de la commande" required component="select" m="0.5em 0">
                                             <option value="Livrer">Livrer</option>
                                             <option value="En cour">En cour</option>
                                        </InputBase>
                                   </div>
                                   <div>
                                        <Button type='submit'>Valider</Button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default produit

produit.PageLayout = AdminLayout


export async function getStaticPaths() {
     // code
     const res = await loadCommandes();

     console.log(res.data.data)
  
     const ids = res.data.data.map((commande) => commande.id)
     return {
          fallback: false,
          paths: ids.map((id) => ({
               params: { id: id.toString() }
          })),
     }
    
}

export async function ProduitsCommande(id) {

     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/commande/${id}`)
     
     return response
}

export async function getStaticProps({params}) {
     // code
     const res = await ProduitsCommande(params.id)

     return {
          props: {
               produits: res.data.data,
               commande: res.data.data[0].commande
          },
     }
}
