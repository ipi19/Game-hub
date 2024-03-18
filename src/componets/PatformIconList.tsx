import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux, FaAndroid
 } from 'react-icons/fa';
 import {MdPhoneIphone } from 'react-icons/md'
 import {SiNintendo } from   'react-icons/si';
 import {BsGlobe}     from 'react-icons/bs'
import React from "react";
import { HStack, Icon} from "@chakra-ui/react";
import { platform } from "../hooks/useGames";
import { IconType } from 'react-icons';




interface proops{
    platforms : platform[]
}



const PlatformIconsList =  ({platforms}: proops) => {

    const iconMap:{[key :string] :IconType } ={
        pc: FaWindows,
        playstation: FaPlaystation,
        linux : FaLinux,
        xbox: FaXbox,
        android : FaAndroid,
        nintendo :SiNintendo,
        mac : FaApple,
        ios : MdPhoneIphone,
        web: BsGlobe,


    }
    return (
        <>
        <HStack marginY={'10px'}>
        {platforms.map((platform) => 
        <Icon as= {iconMap[platform.slug]} color='gray.500'/>
        
        
        )}
        </HStack>
        </>
    )
}


export default PlatformIconsList;