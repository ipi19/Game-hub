import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";



interface proops {
    children : ReactNode
}


const GameCardContainer = ( {children}: proops) =>  {
    return (
        <Box width='200px' borderRadius={10} overflow= 'hidden'>

        </Box>
    )
}