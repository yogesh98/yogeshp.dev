import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Yogesh Patel</title>
        <meta name="description" content="Yogesh Patel's Personal Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box>Hello World</Box>
    </Box>
  )
}
