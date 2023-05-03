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
                              onDrop={(files) => setFile(files)}
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