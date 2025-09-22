// src/components/Match.tsx
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type React from "react";

interface Team {
  name: string;
  logoUrl: string;
  score?: number;
}

interface GameProps {
  matchNumber: number;
  date: string;
  team1: Team;
  team2: Team;
  venue: string;
}
const MotionBox = motion(Box);

const Match: React.FC<GameProps> = ({
  matchNumber,
  date,
  team1,
  team2,
  venue,
}) => {
  return (
    <Box mt="10" textAlign="center">
      {/* Match number + Date */}
<MotionBox
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  textAlign="center"
  mb="6"
>
  {/* MatchDay */}
  <Text
   fontFamily="'Montserrat', sans-serif"
    fontSize={{ base: "2xl", md: "3xl" }}
    fontWeight="medium"
    color="red.500"
    textTransform="uppercase"
    letterSpacing="wider"
  >
    MatchDay {matchNumber}
  </Text>

  {/* Date with underline */}
  <Text
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="medium"
    color="gray.600"
    mt="1"
    display="inline-block"       // line only under text
    borderBottom="2px solid"     
    borderColor="gray.400"
    px="1"                       // optional spacing
  >
    {date}
  </Text>
</MotionBox>

      {/* Teams & Scores */}
      <Flex
        align="center"
        justify="center"
        gap={{ base: 6, md: 12 }}
        mt="6"
        flexDirection={{ base: "column", md: "row" }} // stacked on mobile, row on desktop
      >
        {/* Team 1 */}
        <Box textAlign="center">
          <Image
            src={team1.logoUrl}
            alt={team1.name}
            boxSize={{ base: "80px", md: "120px" }}
            objectFit="contain"
            mx="auto"
          />
          <Text fontFamily={"-moz-initial"} fontWeight="bold" mt="2">
            {team1.name}
          </Text>
          {team1.score !== undefined && (
            <Text
              fontFamily={"cursive"}
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              mt="1"
            >
              {team1.score}
            </Text>
          )}
        </Box>

        {/* VS */}
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          my={{ base: 2, md: 0 }}
        >
          VS
        </Text>

        {/* Team 2 */}
        <Box textAlign="center">
          <Image
            src={team2.logoUrl}
            alt={team2.name}
            boxSize={{ base: "80px", md: "120px" }}
            objectFit="contain"
            mx="auto"
          />
          <Text fontFamily={"-moz-initial"} fontWeight="bold" mt="2">
            {team2.name}
          </Text>
          {team2.score !== undefined && (
            <Text
              fontFamily={"cursive"}
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              mt="1"
            >
              {team2.score}
            </Text>
          )}
        </Box>
      </Flex>

      {/* venue */}
      <Text
        fontSize="md"
        mt="4"
        fontStyle="italic"
        fontWeight="semibold"
        borderBottom="2px solid"
        borderColor="blue.400" 
        display="inline-block" // ensures underline fits text only
        px="2" // optional padding for spacing
      >
        {venue}
      </Text>
    </Box>
  );
};

export default Match;
