import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { matches, type Match } from "../data/matches";
import React from "react";


const MotionBox = motion(Box);

interface Props {
  matchId: number; // pass this manually to choose which match to render
}

const MatchDay: React.FC<Props> = ({ matchId }) => {
  const match: Match | undefined = matches.find((m) => m.id === matchId);


  if (!match) {
    return (
      <Box textAlign="center">
        <Text fontFamily={"monospace"} fontSize="2xl" fontWeight="semibold">
          - - - - - Remember to check back- - - - -
        </Text>
      </Box>
    );
  }

  const { id, date, team1, team2, venue } = match;

  return (
    <>
      <Box textAlign={"center"} >
        <Text
          textAlign={"center"}
          fontSize={{ base: "2xl", md: "2vw" }}
          fontWeight="bold"
          display="inline-block"
          borderTop="4px solid lightblue"
          borderBottom="4px solid lightblue"
          pb="1"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Champions League 2025-26
        </Text>
      </Box>
      <Box mt="10" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          textAlign="center"
          mb="6"
        >
          <Text
            fontFamily="'Montserrat', sans-serif"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="medium"
            color="red.500"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            MatchDay {id}
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="medium"
            color="gray.600"
            mt="1"
            display="inline-block"
            borderBottom="2px solid"
            borderColor="gray.400"
            px="1"
          >
            {date}
          </Text>
        </MotionBox>

        <Flex
          align="center"
          justify="center"
          gap={{ base: 6, md: 12 }}
          mt="6"
          flexDirection={{ base: "column", md: "row" }}
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
            <Text fontWeight="bold" mt="2">
              {team1.name}
            </Text>
            {team1.score !== undefined && (
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                mt="1"
              >
                {team1.score}
              </Text>
            )}
          </Box>

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
            <Text fontWeight="bold" mt="2">
              {team2.name}
            </Text>
            {team2.score !== undefined && (
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                mt="1"
              >
                {team2.score}
              </Text>
            )}
          </Box>
        </Flex>

        <Text
          fontSize="md"
          mt="4"
          fontStyle="italic"
          fontWeight="semibold"
          borderBottom="2px solid"
          borderColor="blue.400"
          display="inline-block"
          px="2"
        >
          {venue}
        </Text>
      </Box>
    </>
  );
};

export default MatchDay;
