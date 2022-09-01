import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    Link,
    Icon,
  } from '@chakra-ui/react';
  import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
  import { MdEmail } from "react-icons/md";

  
  export default function SocialCard() {
    return (
      <Center w="100%" h="100%" py={6} px={6}>
        <Box
          maxW={'300px'}
          w={'full'}
          bg={'gray.800'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'2xl'}
              src={
                'headshot.jpeg'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={"#FFFFFF"}>
                Yogesh Patel
              </Heading>
              <Text color={'gray.500'}>Software Engineer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
                <a href='https://github.com/yogesh98'> <Icon color={"#FFFFFF"} boxSize={8} as={BsGithub} /> </a>
                <a href='https://www.linkedin.com/in/yogeshp98/'> <Icon color={"#FFFFFF"} boxSize={8} as={BsLinkedin} /> </a>
                <a href='callto:7322088416'> <Icon color={"#FFFFFF"} boxSize={8} as={BsFillTelephoneFill} /> </a>
                <a href='mailto:me@yogeshp.dev'> <Icon color={"#FFFFFF"} boxSize={8} as={MdEmail} /> </a>
            </Stack>
            <Link 
                href='mailto:me@yogeshp.dev'
            >
                <Button
                w={'full'}
                mt={8}
                bg={'gray.900'}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}>
                Contact Me
                </Button>
            </Link>

          </Box>
        </Box>
      </Center>
    );
  }