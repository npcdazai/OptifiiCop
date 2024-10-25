import { Button } from '@chakra-ui/button'
import React from 'react'

const PrimaryButton = ({title, onClick, px = 8, ...props}) => {
  return (
    
    <Button
    {...props}
    _hover={{
      // bgGradient: "linear(to-r, #5E0FCD, #3725EA)",
      opacity: 0.8,
    }}
    bgGradient="linear(to-r, #3725EA, #5E0FCD)"
    fontSize={"xs"}
    px={px}
    fontWeight={500}
    size={"sm"}
    color={"#fff"}
    variant="solid"
    transition={"0.5s all"}
    _active={{
      // bgGradient: "linear(to-r, #5E0FCD, #3725EA)",
      opacity: 1,
    }}
    onClick={onClick}
  >{title}</Button>
  )
}

export default PrimaryButton