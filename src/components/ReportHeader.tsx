// src/components/ReportHeader.tsx
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";

interface ReportHeaderProps {
  team1Logo: string;
  team2Logo: string;
  date: string;
  optionalImage?: string; // optional image for 3rd grid
}

const ReportHeader: React.FC<ReportHeaderProps> = ({
  team1Logo,
  team2Logo,

  optionalImage,
}) => {
  return (
    <Box w="100%" p={0}>
      <SimpleGrid row={{ base: 1, md: 3 }} spacing={0} alignItems="center">
        {/* Team logos row */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={"blackAlpha.900"}
          gap={4}
          //   border="2px solid black"
          p={4}
        >
          <Image
            src={team1Logo}
            alt="Team 1"
            boxSize="80px"
            objectFit="contain"
            bg={"transparent"}
          />
          <Image
            src={team2Logo}
            alt="Team 2"
            boxSize="80px"
            objectFit="contain"
          />
        </Box>

        {/* Match date */}
        {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid black"
      p={4}
    >
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
        {date}
      </Text>
    </Box> */}

        {/* Optional image */}
        <Box
          display="flex"
          justifyContent="center" // centers horizontally
          alignItems="center" // centers vertically
          border="2px solid black"
          w="100%" // full width of parent
          p={4}
        >
          {optionalImage && (
            <Image
              src={optionalImage}
              alt="Optional"
              maxW="50%" // image will not exceed container width
              maxH="500px" // optional max height
              objectFit="contain" // fit entire image inside box without cropping
              borderRadius="md"
              mx="auto" // ensure the image is centered horizontally
            />
          )}
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ReportHeader;
