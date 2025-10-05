// src/components/ReportHeader.tsx
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

interface ReportHeaderProps {
  team1Logo: string;
  team2Logo: string;
  date: string;
  optionalImage?: string; // optional image for score/banner/etc.
}

const ReportHeader: React.FC<ReportHeaderProps> = ({
  team1Logo,
  team2Logo,
  optionalImage,
}) => {
  return (
    <Box w="100%">
      {/* Header Row */}
      <Box bg="blackAlpha.900" p={4}>
        <Flex align="center" justify="space-between">
          {/* Left spacer (or future buttons) */}
          <Box w="80px" />

          {/* Centered Logos */}
          <Flex flex="1" justify="center" align="center" gap={6}>
            <Image
              src={team1Logo}
              alt="Team 1"
              boxSize={{ base: "60px", md: "80px" }}
              objectFit="contain"
            />
            <Image
              src={team2Logo}
              alt="Team 2"
              boxSize={{ base: "60px", md: "80px" }}
              objectFit="contain"
            />
          </Flex>

        </Flex>
      </Box>

      {/* Optional image row (no black background) */}
      {optionalImage && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          mt={4}
        >
          <Image
            src={optionalImage}
            alt="Optional"
            maxW={{ base: "80%", md: "50%" }}
            maxH="300px"
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
      )}
    </Box>
  );
};

export default ReportHeader;
