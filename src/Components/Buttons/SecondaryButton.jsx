import { Button } from '@chakra-ui/button'
import React from 'react'

const SecondaryButton = ({title, onClick, px = 8, ...props}) => {
  return (
    
    <Button
    {...props}
    fontSize={"xs"}
    px={px}
    fontWeight={600}
    size={"sm"}
    variant="outline"
    transition={"0.5s all"}
    colorScheme='purple'
    onClick={onClick}
  >{title}</Button>
  )
}

export default SecondaryButton