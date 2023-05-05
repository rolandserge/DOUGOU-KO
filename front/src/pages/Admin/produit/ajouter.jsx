import React, { useRef, useState } from 'react'
import { Switch, InputBase,  Input, Button, NumberInput, Textarea, Group, Text, rem } from '@mantine/core';
import AdminLayout from '../../../../Layouts/AdminLayout';
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
     const [image, setImage] = useState()
     const [description, setDescription] = useState();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
     const [images, setImages] = useState([]);

     const { enqueueSnackbar } = useSnackbar()


     const AjouterProduit = async(e) => {
          
          e.preventDefault()

          const categorie = categorieRef.current.value
          const name = nameRef.current.value
  
          if(image.length == 0) {

               enqueueSnackbar("S'il vous plait! veillez choisir l'image du produit", {variant: "error"})

          } else {

               const formData = new FormData()
               formData.append('name', name)
               formData.append("price", prix)
               formData.append('top', checked ? "1" : "0")
               formData.append('stock', qty)
               formData.append('reduction', reduction)
               formData.append('description', description)
               formData.append('categorie', categorie)
               formData.append('image', image[0])
               for(let i = 0; i < images.length; i++) {
                    formData.append('images[]', images[i])
               }
             
               await axiosAuth.post("/api/add-produit", formData)
               .then(res => {
                    if(res.data.status === "success") {

                         enqueueSnackbar('Produit crée avec succes', {variant: "success"})
                         setPrix('')
                         setImages('')
                         setImage('')
                         setQty('')
                         setReduction('')
                         setDescription('')
                         nameRef.current.value = ""
                         categorieRef.current.value = ""
                         
                    } else {
                         console.log(res)
                         enqueueSnackbar("Une erreur s'est produite", {variant: "error"})
                    }
               })
               .catch(error => {
                    console.log(error);
               })   
          }
     }

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
                                   onDrop={(files) => {
                                             setImage(files)
                                             enqueueSnackbar('Images uploade avec success', {variant: "success"})
                                        }
                                   } 
                                   onReject={(files) => enqueueSnackbar('Les images choisies sont invalides', {variant: "error"})}
                                   maxSize={3 * 1024 ** 2}
                                   accept={IMAGE_MIME_TYPE}
                              >
                                   <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                                   <div>
                                        <Text size="xl" inline>
                                             Choisissez l'image du produit
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7}>
                                             Joignez un fichier que vous le souhaitez, le fichier ne doit pas dépasser 5 Mo
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
                         <div className="images_container">
                              <Dropzone
                                   onDrop={(files) => {
                                             setImages(files)
                                             enqueueSnackbar('Images uploade avec success', {variant: "success"})
                                        }
                                   } 
                                   onReject={(files) => enqueueSnackbar('Les images choisies sont invalides', {variant: "error"})}
                                   maxSize={3 * 1024 ** 2}
                                   accept={IMAGE_MIME_TYPE}
                              >
                                   <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                                   <div>
                                        <Text size="xl" inline>
                                             Sélectionner les sous images du produit
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7}>
                                             Joignez autant de fichiers que vous le souhaitez, chaque fichier ne doit pas dépasser 5 Mo
                                        </Text>
                                   </div>
                                   </Group>
                              </Dropzone>
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