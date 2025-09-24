// src/pages/HomePage.tsx
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Match from "../components/Match";
import { matches } from "../data/fixtures";

function HomePage() {
  return (
    <Box mt="10">
      <Box mt="20" textAlign="center">
        <Text
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

        <Box mt="6">
          {matches.map((match) => (
            <Box key={match.id} mb="10">
              <Match
                matchNumber={match.id}
                date={match.date}
                team1={match.team1}
                team2={match.team2}
                venue={match.venue}
              />

              <Link to={`/match/${match.id}`}>
                <Button mt="4" colorScheme="red">
                  View Full Report
                </Button>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
