import React from "react";
import {Game }from "../hooks/useGames"
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Proops{
    game: Game
}


const GameCard = ({game } : Proops) => {
    return (

        <Card borderRadius={12} overflow={"hidden"}>
            <Image  src= { getCroppedImageUrl(game.background_image)}/>

            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justify='space-between'>
                <PlatformIconsList platforms ={game.parent_platforms.map( p=>p.platform)} />
                <CriticScore score={game.metacritic}/>
                </HStack>
              </CardBody>

           
        </Card>
    )
}

export default GameCard;