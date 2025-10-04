import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { HamburgerIcon } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Calendar", path: "/fixturesCalendar" }
  ];

  return (
    <Box
      bg={"red.600"}
      px={6}
      py={3}
      color="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
      mb={8}
    >
      <Flex h={12} alignItems="center" justifyContent="space-between">
        {/* Logo / Title */}
        <Box fontWeight="bold" fontSize="lg">
          LFC Insights
        </Box>

        {/* Desktop Navigation */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              as={Link}
              to={link.path}
              variant={location.pathname === link.path ? "outline" : "ghost"}
              colorScheme={location.pathname === link.path ? "white" : "whiteAlpha"}
              size="sm"
            >
              {link.name}
            </Button>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          _hover={{ bg: "blackAlpha.300" }}
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={3} mt={2}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                as={Link}
                to={link.path}
                onClick={onClose}
                w="full"
                variant={location.pathname === link.path ? "outline" : "ghost"}
                colorScheme={location.pathname === link.path ? "white" : "whiteAlpha"}
                size="sm"
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
