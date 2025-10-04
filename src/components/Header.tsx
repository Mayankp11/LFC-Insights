import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa6";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    { name: "Home", icon: IoMdHome, path: "/" },
    { name: "Fixtures", icon: FaRegCalendar, path: "/fixturesCalendar" },
  ];

  return (
    <Box
      bg="red.600"
      px={6}
      py={1}
      color="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex h={12} alignItems="center" justifyContent="space-between">
        {/* Logo / Title */}
        <Box fontWeight="bold" fontSize="lg">
          LFC Insights
        </Box>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              as={Link}
              to={link.path}
              leftIcon={<link.icon size={20} />}
              variant={location.pathname === link.path ? "outline" : "ghost"}
              color="white"
              borderColor="white"
              _hover={{ bg: "whiteAlpha" }}
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
      {isOpen && (
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
                colorScheme="white"
                size="sm"
                leftIcon={<link.icon />}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
