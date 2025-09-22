
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  Heading,
  Flex,
} from "@chakra-ui/react";

import ImageCarousel from "../../components/ImageCarousel";
import ReportHeader from "../../components/ReportHeader";

const MatchDay1Report = () => {
  const images = [
    "/images/SalahVsATM.webp",
    "/images/IsakDebutATM.webp",
    "/images/SalahVsATM2.webp",
    "/images/VvdVsATM.avif",
    "/images/Simeone-off.jpg",
  ];

  return (
    <>
      {/* Title */}
      <ReportHeader
        team1Logo="/logos/LFC.png"
        team2Logo="/logos/ATM.png"
        date="September 17, 2025"
        optionalImage="/images/Matchday1result.jpg"
      />
      <Box maxW="7xl" mx="auto" p={6}>
        {/* VVD Winner*/}
        <Card
          shadow="lg"
          borderRadius="2xl"
          _hover={{ transform: "scale(1.02)" }}
          transition="transform 0.2s"
        >
          <CardBody textAlign="center">
            <Box maxW="900px" mx="auto" mt={2}>
              <video
                src="/images/Vvd-winner.mp4" //
                autoPlay
                // controls
                loop
                muted
                style={{
                  borderRadius: "12px",
                  maxHeight: "500px",
                  width: "100%",
                }}
              />
            </Box>
          </CardBody>
        </Card>
        {/* Facts & Stats */}
        <Box mt={10} textAlign="center">
          <Flex align="center" my={8}>
            <Box flex="1" borderBottom="3px solid darkgreen" />
            <Heading
              fontFamily="Bungee Shade"
              fontSize={{ base: "2xl", md: "3xl" }}
              textTransform="uppercase"
              color="red.800"
              mx={4}
              whiteSpace="nowrap"
            >
              Facts & Stats
            </Heading>
            <Box flex="1" borderBottom="3px solid darkgreen" />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {/* Image(BG) + text card */}
            <Card
              shadow="lg"
              borderRadius="2xl"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s"
              overflow="hidden" // ensures image doesn't overflow
              position="relative"
              minH="300px"
            >
              {/* Background Image */}
              <Image
                src="/images/Isak-lfc-Signing-Day.jpg"
                alt="Isak Debut"
                objectFit="cover"
                w="100%"
                h="100%"
                position="absolute"
                top={0}
                left={0}
                zIndex={0}
                opacity={0.8} // adjust to make text more readable
              />

              {/* Overlay to darken background */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="rgba(0,0,0,0.4)" // adjust darkness
                zIndex={1}
              />

              {/* Text on top */}
              <CardBody
                position="relative"
                zIndex={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
                textAlign="center"
                color="white"
              >
                <Heading fontFamily="Variable Lora" fontSize="5xl" mb={2}>
                  Isak debut's for LFC
                </Heading>
              </CardBody>
            </Card>
            <Card
              shadow="lg"
              borderRadius="2xl"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s"
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                minH="120px"
                px={4}
              >
                <Text
                  fontFamily="Calistoga"
                  fontSize="clamp(16px, 4vw, 36px)"
                  lineHeight="1.2"
                >
                  Since joining LFC in 2018, VVD is the highest scoring defender
                  with 25 goals
                </Text>
              </CardBody>
            </Card>

            {/* Video Card */}
            <Card
              shadow="lg"
              borderRadius="2xl"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s"
            >
              <CardBody textAlign="center">
                <Box maxW="500px" mx="auto" mt={2}>
                  <video
                    src="/images/VvdSlowmo.mp4" // ✅ public video
                    autoPlay
                    loop
                    muted
                    style={{
                      borderRadius: "12px",
                      maxHeight: "500px",
                      width: "100%",
                    }}
                  />
                </Box>
              </CardBody>
            </Card>

            {/* Text Only Card */}
            <Card
              shadow="lg"
              borderRadius="2xl"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s"
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                minH="120px"
                px={4}
              >
                <Text
                  fontFamily="Calistoga"
                  fontSize="clamp(16px, 4vw, 36px)"
                  lineHeight="1.2"
                >
                  Liverpool's five-match streak of last-minute winning goals
                  continues...
                </Text>
              </CardBody>
            </Card>

            {/* Birthday Card */}
            <Card
              shadow="lg"
              borderRadius="2xl"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s"
            >
              <CardBody textAlign="center">
                <Heading fontFamily="Rouge Script" fontSize="4xl" mb={2}>
                  Perfect Birthday Present
                </Heading>
                <Image
                  src="/images/arneSlot.jpeg" 
                  alt="Gaffer Birthday"
                  borderRadius="xl"
                  mt={2}
                  mx="auto"
                />
                <Text
                  fontFamily="Rouge Script"
                  fontSize="4xl"
                  mt={2}
                  fontWeight="semibold"
                >
                  Happy Birthday Gaffer!
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* Moments to Cherish Section */}
        <Flex align="center" my={10}>
          <Box flex="1" borderBottom="3px solid darkgreen" />
          <Heading
            fontFamily="Bungee Shade"
            fontSize={{ base: "2xl", md: "3xl" }}
            textTransform="uppercase"
            color="red.800"
            mx={4}
            whiteSpace="nowrap"
          >
            Cherished Moments
          </Heading>
          <Box flex="1" borderBottom="3px solid darkgreen" />
        </Flex>

        <Box mt={16} textAlign="center">
          <ImageCarousel images={images} />
        </Box>

        {/* Match Summary */}
        <Box mt={10} textAlign="left">
          <Heading fontSize="2xl" mb={4}>
           
          </Heading>
          <Text fontSize="md" fontFamily={"Calistoga"} lineHeight="tall" fontWeight={"medium"}>
            What a dream start to the Champions League! After storming through
            the Premier League with four wins out of four, the Reds were always
            going to come out flying. And just when it looked like the night
            couldn't get any better, the skipper popped up with a last-minute
            header to gift the Gaffer the perfect birthday present!
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default MatchDay1Report;
