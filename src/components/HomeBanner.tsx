import React from "react";
import { Box, Image } from "@chakra-ui/react";

const HomeBanner: React.FC = () => {
  return (
    <Box
      w="100vw" // takes up 90% of the viewport width
      h={{ base: "40vh", md: "50vh", lg: "60vh" }} // responsive height based on viewport
      mx="auto" // centers the banner horizontally
      overflow="hidden"
      borderRadius="xl"
      boxShadow="md"
    >
      <Image
        src="/images/HomeBanner.png"
        alt="Home Banner"
        objectFit="contain" // ensures full image is visible (no cropping)
        w="100%"
        h="100%"
      />
    </Box>
  );
};

export default HomeBanner;
