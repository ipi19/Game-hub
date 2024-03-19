import { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCards";
import GameCardSkelton from "./GameCardSkelton";




const GameGrid = () => {

    const {games, error,isLoading} = useGames();
    const skeletons =[1,2,3,4,5,6];



    return(
        <>

      {error && <Text>{error}</Text>}
       <SimpleGrid columns={{sm:1, md: 2, lg:3, xl: 5}}
       padding="10px"
        spacing={6}>
            {isLoading && skeletons.map(skeleton => <GameCardSkelton key={skeleton}/>)}
        {games.map(game =>(
            <GameCard key={game.id } game={game} />
        )

        )}
       </SimpleGrid>
       </>

    )
}


export default GameGrid;