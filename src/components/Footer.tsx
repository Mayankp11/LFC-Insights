import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.300"
      py={4}
      mt={24}
    >
      <Text fontSize="sm" color="gray.600">
        © Liverrbird11
      </Text>
    </Box>
  );
};

export default Footer;
