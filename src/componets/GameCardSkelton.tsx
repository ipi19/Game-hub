import { Card,CardBody,Skeleton, SkeletonText } from "@chakra-ui/react";




const GameCardSkelton = () =>{
    return (
        <Card width='200px' >
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkelton;