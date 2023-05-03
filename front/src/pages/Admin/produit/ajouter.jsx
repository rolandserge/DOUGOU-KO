import React, { useRef, useState } from 'react'
import { Switch, InputBase,  Input, Button, NumberInput, Textarea, Group, Text, rem } from '@mantine/core';
import AdminLayout from '../../../../Layouts/AdminLayout';
import {useDropzone} from 'react-dropzone';
import { IoImageOutline } from "react-icons/io5";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import axiosAuth from '../../../../Libs/axios';

const ajouter = ({categories}) => {

     const [checked, setChecked] = useState(false);
     const categorieRef = useRef()
     const nameRef = useRef()
     const [prix, setPrix] = useState();
     const [reduction, setReduction] = useState();
     const [qty, setQty] = useState();
     const [description, setDescription] = useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
     const [images, setImages] = useState([]);

     const { enqueueSnackbar } = useSnackbar()


     const AjouterProduit = async (e) => {
          
          e.preventDefault()

          const categorie = categorieRef.current.value
          const name = nameRef.current.value
  
          if(images.length == 0) {

               enqueueSnackbar('Veillez choisir une ou plusieurs image', {variant: "error"})

          } else {

               const formData = new FormData()
               formData.append('name', name)
               formData.append("price", prix)
               formData.append('top', checked ? "1" : "0")
               formData.append('stock', qty)
               formData.append('reduction', reduction)
               formData.append('description', description)
               formData.append('categorie', categorie)
     
               for(let i = 0; i < images.length; i++) {

                    formData.append('images[]', images[i])
               }
               
                    await axiosAuth.post("/api/add-produit", formData).then(res => {

                         // if(res.data.status === "success") {
                         //      console.log(res.data);
                         //      enqueueSnackbar('Produit crée avec succes', {variant: "success"})

                         // } else {

                         //      console.log(res);
                         // }
                         console.log(res.data)
                    }).catch(error => {
                         console.log(error);
                    })
     }}

     return (
          <div>
              <div>
                    <h2>Creation d'un produit</h2>
              </div>
              <div>
                    <form action="" onSubmit={AjouterProduit} encType='multipart/forma-data'>
                         <div>
                              <div>
                                   <Input
                                        placeholder="Entrer le nom du produit"
                                        size="md"
                                        mt={10}
                                        required
                                        ref={nameRef}
                                   />
                              </div>
                              <div>
                                   <InputBase required ref={categorieRef} label="Selection la categorie" component="select" mt="md" mb={15}>
                                        {
                                             categories.map((categorie, index) => (

                                                  <option value={categorie.id} key={index}>{categorie.name}</option>
                                             ))
                                        }
                                   </InputBase>
                              </div>
                         </div>
                         <div className="images_container">
                              <Dropzone
                                   onDrop={(files) => setImages(files)}
                                   onReject={(files) => console.log('rejected files', files)}
                                   accept={IMAGE_MIME_TYPE}
                              >
                                   <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                                   <Dropzone.Accept>

                                   </Dropzone.Accept>
                                   <Dropzone.Reject>
                                   
                                   </Dropzone.Reject>
                                   <div>
                                        <Text size="xl" inline>
                                        Drag images here or click to select files
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7}>
                                        Attach as many files as you like, each file should not exceed 5mb
                                        </Text>
                                   </div>
                                   </Group>
                              </Dropzone>
                         </div>
                         <div>
                              <NumberInput 
                                   required 
                                   label='Entrer le prix du produit en FCFA'
                                   value={prix} 
                                   m="1em 0"
                                   onChange={setPrix}
                                 />
                         </div>
                         <div>
                              <NumberInput required label="Entrer la reduction en FCFA" value={reduction} onChange={setReduction} />
                         </div>
                         <div>
                              <NumberInput 
                                   required 
                                   label='Entrer la quantité du produit'
                                   m="1em 0"
                                   value={qty} 
                                   onChange={setQty} />
                         </div>
                         <div>
                              <Textarea placeholder='Entrer la description du produit' value={description} m="1em 0" label="Entrer la descritpion du produit" required onChange={(event) => setDescription(event.currentTarget.value)} />
                         </div>
                         <div>
                              <label htmlFor="">Top vente</label>
                              <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} mb={15} />
                         </div>
                         <div>
                              <Button type='submit'>Ajouter le produit</Button>
                         </div>
                    </form>
              </div>
          </div>
     );
};

export default ajouter;

ajouter.PageLayout = AdminLayout

export async function getStaticProps() {

     const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`)
     return {
          props:{
               categories: res.data.data
          }
     }
}