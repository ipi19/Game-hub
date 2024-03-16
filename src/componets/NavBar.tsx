import { HStack, Image, } from "@chakra-ui/react";
import logo from       "../assets/logo.webp";
import COlorModeSwitch from "./ColorModeSwitch";



const NavBar = () => {
    return (
            <HStack justifyContent='space-between' padding='10px'>
              <Image src= {logo} boxSize='60px'/>
          <COlorModeSwitch/>          
            </HStack>
        )
}

export default NavBar;