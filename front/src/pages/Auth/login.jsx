import React, { useRef, useState } from 'react';
import Logo from "../../../Assets/LogoDk.png"
import Image from 'next/image';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { useAuth } from '../../../Hooks/auth';
import Loading from '../../../Component/Loading';


const login = () => {

     const emailRef = useRef()
     const passwordRef = useRef()
     const [loading, setLoading] = useState(false)
     
     const { Login, isLoading, user} = useAuth({ middleware : "guest"})
     
     const loginForm = async(event) => {
          
          setLoading(true)
          event.preventDefault()
          const email = emailRef.current.value
          const password = passwordRef.current.value
          Login({email, password})
     }  

     if(isLoading || user) {
          
          return (
               <div>
                    <Loading />
               </div>
          )
     }

     return (
          <Container size={420} my={40}>
               <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
               >
                    <Link href="/">
                         <Image src={Logo} alt="Le logo de Dougou'KO" width={100} />
                    </Link>
               </Title>
               <Text color="dimmed" size="sm" align="center" mt={5}>
                    Vous n'avez pas de compte ?{' '}
                    <Anchor size="sm" component="button">
                         <Link href="/Auth/register" className='register'>
                              S'incrire
                         </Link>
                    </Anchor>
               </Text>
               <form onSubmit={loginForm}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                         <TextInput label="Adresse E-mail" ref={emailRef} type='email' placeholder="serge@gmail.com" required />
                         <PasswordInput label="Mot de passe" ref={passwordRef} placeholder="Votre mot de passe" required mt="md" />
                         <Button fullWidth mt="xl" type='submit' loading={loading} loaderPosition='right'>
                              Se connecter
                         </Button>
                    </Paper>
               </form>
          </Container>
     );
};

export default login;