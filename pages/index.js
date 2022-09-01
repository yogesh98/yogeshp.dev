import { Box } from '@chakra-ui/react'
import Background from '../components/layout/background/Background'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import SocialCard from '../components/socialcard/SocialCard'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Background>
      <Head>
        <title>Yogesh Patel</title>
        <meta name="description" content="Yogesh Patel's Personal Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <SocialCard/>
    </Background>
  )
}
