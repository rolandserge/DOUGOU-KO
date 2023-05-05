import React, { useRef, useState } from 'react';
import { Input, Button ,Textarea, Group, rem, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import AdminLayout from '../../../../Layouts/AdminLayout';
import axiosAuth from '../../../../Libs/axios';
import { useSnackbar } from 'notistack';
const ajouter = () => {

     const nameRef = useRef()
     const [file, setFile] = useState();
     const [description, setDescription] = useState('')
     const { enqueueSnackbar } = useSnackbar()

     const AjouterCategorie = async(e) => {

          e.preventDefault()

          const name = nameRef.current.value

          if(typeof file === "undefined") {

               enqueueSnackbar('Veillez choisir une image', {variant: "error"})

          } else {

               const formData = new FormData()
               formData.append('name', name)
               formData.append("description", description)
               formData.append('image', file[0])
               
               await axiosAuth.post('/api/add-categorie', formData)
               .then(res => {
     
                    if(res.data.status === "success") {
                         setDescription('')
                         setFile('')
                         nameRef.current.value = ""
                         enqueueSnackbar('Categorie crée avec succes', {variant: "success"})
                    } else {
                         enqueueSnackbar("Une erreur s'est produite lors de la creation de la categorie", {variant: "error"})
                    }
               })
               .catch(error => console.log(error))
          }

     }
     return (
          <div>
               <div>
                    <h2>Creation d'une categorie</h2>
               </div>
               <form action="" onSubmit={AjouterCategorie} encType='multipart/forma-data'>
                    <div>
                         <Input
                              placeholder="Entrer le nom du produit"
                              size="md"
                              m="1em 0"
                              required
                              ref={nameRef}
                         />
                    </div>
                    <div>
                         <Dropzone
                              onDrop={(files) =>  {
                                        setFile(files)
                                        enqueueSnackbar('Images uploade avec success', {variant: "success"})
                                   }
                              }
                              onReject={(files) => enqueueSnackbar('Les images choisies sont invalides', {variant: "error"})}
                              accept={IMAGE_MIME_TYPE}
                              maxSize={3 * 1024 ** 2}
                         >
                              <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                              <div>
                                   <Text size="xl" inline>
                                        Faites glisser des images ici ou cliquez pour sélectionner une image de la categorie
                                   </Text>
                                   <Text size="sm" color="dimmed" inline mt={7}>
                                        Joignez un fichier que vous le souhaitez, L'image ne doit pas dépasser 5 Mo
                                   </Text>
                              </div>
                              </Group>
                         </Dropzone>
                    </div>
                    <div>
                         <Textarea placeholder='Entrer la description de la categorie' value={description} m="1em 0" label="Entrer la descritpion de la categorie" required onChange={(event) => setDescription(event.currentTarget.value)} />
                    </div>
                    <div>
                         <Button type='submit'>Ajouter la categorie</Button>
                    </div>
               </form>
          </div>
     );
};

export default ajouter;

ajouter.PageLayout = AdminLayout