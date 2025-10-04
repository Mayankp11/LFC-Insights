// src/App.tsx
import { Box, Button, Flex } from "@chakra-ui/react";
import Title from "./components/Title";
import MatchDay1Report from "./pages/reports/MatchDay1Report";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import RouterWithTransition from "./components/animation/RouterWithTransition";
import MatchDay from "./pages/MatchDay";
import Calendar from "./components/Calendar";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RouterWithTransition />}>
          {/* Home route */}
          <Route
            path="/"
            element={
              <Flex
                direction="column"
                align="center"
                justify="center"
                minH="100vh"
                gap={8}
                textAlign="center"
              >
                <Box>
                  <Title
                    title="Liverpool FC"
                    subtitle="You'll Never Walk Alone"
                  />
                </Box>

                <Box>
                  <MatchDay matchId={3} />
                </Box>

                <Link to="/match/atm/report">
                  <Button colorScheme="red" size="lg">
                    View Match Report
                  </Button>
                </Link>

                {/* Footer */}
                <Footer />
              </Flex>
            }
          />

          {/* Match report route */}
          <Route path="/match/atm/report" element={<MatchDay1Report />} />
          
          {/* Calendar Route */}
          <Route path="/fixturesCalendar" element={<CalendarPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
