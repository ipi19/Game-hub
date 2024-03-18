import { Badge } from "@chakra-ui/react";
import React from "react";



interface proops{
    score:number;
}


const CriticScore = ({ score}: proops) => {
let color = score >75 ? 'green': score > 60 ? "yellow" : "red"


    return (
           <Badge colorScheme={color} fontSize="15px" padding={2} borderRadius="4px">
            {score}
           </Badge>
    )
}

export default CriticScore;