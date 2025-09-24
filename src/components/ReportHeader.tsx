// src/components/ReportHeader.tsx
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import HomeButton from "./button/HomeButton";

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
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="blackAlpha.900"
          p={4}
        >
          {/* Left spacer "can be empyty" */}
          <Box/>

          {/* Centered logos */}
          <Box display="flex" gap={4}>
            <Image
              src={team1Logo}
              alt="Team 1"
              boxSize="80px"
              objectFit="contain"
              bg="transparent"
            />
            <Image
              src={team2Logo}
              alt="Team 2"
              boxSize="80px"
              objectFit="contain"
            />
          </Box>

          {/* Home button pinned to right */}
          <HomeButton />
        </Box>

        {/* Full time score */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="2px solid black"
          w="100%"
          p={4}
        >
          {optionalImage && (
            <Image
              src={optionalImage}
              alt="Optional"
              maxW="50%" // image will not exceed container width
              maxH="500px"
              objectFit="contain"
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
