import { HStack,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack p={"4"} shadow={"base"}   >
     <Button variant={"unstyled"} >
    <Link to="/" >HOME</Link>
     </Button>
     <Button variant={"unstyled"} >
    <Link to="/exchanges" >EXCHANGES</Link>
     </Button>
     <Button variant={"unstyled"}>
    <Link to="/coins" >COINS</Link>
     </Button>
     </HStack>
    )
}

export default Header