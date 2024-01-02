import { Stack, Box, Button, ButtonGroup } from "@chakra-ui/react";

function Header() {
  return (
 
          
      <Stack direction="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={20}
          width="100%"
          py={20}
          bgImage="url('https://www.cuerpomente.com/medio/2023/03/03/montanismo_4397a7e5_1280x720.jpg')"
          bgPosition="left"
          bgRepeat="no-repeat"
          mb={2}
          position="relative"
          >
          <Box fontSize="2xl" mb={10} position="absolute" top="5" color="white" fontWeight="light" >
            DOMINA EL TERRENO
          </Box>
          <ButtonGroup gap="2">
            <Button colorScheme="blackAlpha">Ver detalles</Button>
            <Button colorScheme="whiteAlpha">Ver video</Button>
           
          </ButtonGroup>
        </Box>
      </Stack>
    
  );
}

export default Header;




