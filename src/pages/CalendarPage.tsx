// src/pages/CalendarPage.tsx
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import { matches } from "../data/fixtures";

const CalendarPage = () => {
  return (
    <Flex direction="column" mt={8} gap={8} textAlign="center" px={4}>
      <>
        <Box>
          <Calendar
            fixtures={[
              { date: "2025-09-17", image: "/logos/ATM.png" },
              { date: "2025-09-30", image: "/logos/Galatasaray-logo.png" },
              {
                date: "2025-10-22",
                image: "/logos/Eintracht-Frankfurt-logo.png",
              },
              { date: "2025-11-04", image: "/logos/Real-Madrid-logo.png" },
              { date: "2025-11-26", image: "/logos/PSV-logo.png" },
              { date: "2025-12-09", image: "/logos/Inter-Milan-logo.png" },
              { date: "2026-01-21", image: "/logos/Marseilla-logo.png" },
              { date: "2026-01-28", image: "/logos/Qarabag-logo.png" },
            ]}
          />
        </Box>
        {/* Fixture Details Table */}
        <Box w="100%" maxW="900px" alignSelf={"center"}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="red.600"
            mb={4}
            textAlign="center"
          >
            Fixture Details
          </Text>

          <TableContainer
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="sm"
            bg="white"
          >
            <Table variant="simple" size="md">
              <Thead bg="red.600">
                <Tr>
                  <Th color="white" textAlign="center"></Th>
                  <Th color="white" textAlign="center"></Th>
                  <Th color="white" textAlign="center"></Th>
                  <Th color="white" textAlign="center">
                    Date
                  </Th>
                  <Th color="white" textAlign="center">
                    Venue
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {matches.map((match) => (
                  <Tr
                    key={match.id}
                    _hover={{ bg: "gray.50" }}
                    transition="background 0.2s ease"
                  >
                    <Td textAlign="center" fontWeight="medium">
                      {match.team1.name}
                    </Td>
                    <Td textAlign="center" fontWeight="bold" color="gray.600">
                      VS
                    </Td>
                    <Td textAlign="center" fontWeight="medium">
                      {match.team2.name}
                    </Td>
                    <Td textAlign="center" fontSize="sm" color="gray.700">
                      {match.date}
                    </Td>
                    <Td textAlign="center" fontSize="sm" color="gray.700">
                      {match.venue}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Footer />
      </>
    </Flex>
  );
};

export default CalendarPage;
