import React from "react";
import { Box, Image } from "@chakra-ui/react";

const HomeBanner: React.FC = () => {
  return (
    <Box
      w="100%"
      h={{ base: "250px", md: "400px", lg: "500px" }}
      overflow="hidden"
      borderRadius="xl"
      boxShadow="md"
    >
      <Image
        src="/images/HomeBanner.png" 
        alt="Home Banner"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  );
};

export default HomeBanner;
