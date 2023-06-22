import React, { useRef, useState } from 'react';
import Logo from "../../../Assets/LogoDk.png"
import Link from 'next/link';
import Image from 'next/image';
import { TextInput, PasswordInput, Anchor, Paper, Title, Text, Container, Button } from '@mantine/core';
import { useAuth } from '../../../Hooks/auth';
import Loading from '../../../Component/Loading';


const register = () => {

     const nomRef = useRef()
     const emailRef = useRef()
     const [loading, setLoading] = useState(false)
     const passwordRef = useRef()

     const { register, isLoading, user } = useAuth({middleware : "guest"})
     

     const registerFrom = async (e) => {

          setLoading(true)
          e.preventDefault()
          const name = nomRef.current.value
          const email = emailRef.current.value
          const password = passwordRef.current.value
          register({name, email, password})
     }

     if(isLoading || user) {

          return <><Loading /></>
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
                    Vous avez deja un compte ?{' '}
                    <Anchor size="sm" component="button">
                         <Link href="/Auth/login" className='register'>
                              Se connecter
                         </Link>
                    </Anchor>
               </Text>
               <form onSubmit={registerFrom}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                         <TextInput label="Nom" ref={nomRef} placeholder="Serge-Roland" required />
                         <TextInput label="Adresse E-mail" ref={emailRef} type='email' placeholder="sergeroland@gmail.com" required />
                         <PasswordInput label="Mot de passe" mih={6} ref={passwordRef} placeholder="Your password" required />
                         <Button fullWidth mt="xl" type='submit' loading={loading} loaderPosition='right'>
                              S'inscrire
                         </Button>
                    </Paper>
               </form>
          </Container>
     );
};

export default register;