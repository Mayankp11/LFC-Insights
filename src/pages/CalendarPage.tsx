// src/pages/CalendarPage.tsx
import { Box, Flex } from "@chakra-ui/react";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";


const CalendarPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      mt={8}
      gap={8}
      textAlign="center"
    >
    <>
      <Box>
        <Calendar
          fixtures={[
              { date: "2025-09-17", image: "/logos/ATM.png" },
              { date: "2025-09-30", image: "/logos/Galatasaray-logo.png" },
              { date: "2025-10-22", image: "/logos/Eintracht-Frankfurt-logo.png" },
              { date: "2025-11-04", image: "/logos/Real-Madrid-logo.png" },
              { date: "2025-11-26", image: "/logos/PSV-logo.png" },
              { date: "2025-12-09", image: "/logos/Inter-Milan-logo.png" },
              { date: "2026-01-21", image: "/logos/Marseilla-logo.png" },
              { date: "2026-01-28", image: "/logos/Qarabag-logo.png" },
            ]}
            />
      </Box>

      <Footer />
            </>
 </Flex>
  );
};

export default CalendarPage;
