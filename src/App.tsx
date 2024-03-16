
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './componets/NavBar';
import GameGrid from './componets/gameGrid';

function App() {

 return (<Grid templateAreas={{
  base : `"nav" " main"`,
  lg: `"nav nav"  "aside main"`
 }}>
 <GridItem area='nav' ><NavBar/></GridItem>

 <Show above='lg'><GridItem area='aside' >Aside</GridItem></Show>

 
 
 <GridItem area='main'>
<GameGrid />

 </GridItem>
 </Grid>

 );
}
  


   

export default App
