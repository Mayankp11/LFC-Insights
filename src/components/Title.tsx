// src/components/Title.tsx
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  title: string;
  subtitle: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle}) => {
  return (
    <Box
      w={"90vw"}
      alignItems="center"
      justifyContent="center"
      border="2px solid black"
      mx="auto"
      textAlign="center"
      p="8"
    >
      <Text
        fontFamily="Georgia, serif"
        fontSize="7vw" // scales with viewport width
        fontWeight="bold"
        lineHeight="1"
        color={"red.500"}
      >
        {title}
      </Text>

      {subtitle && (
        <Text
        fontFamily={"sans-serif"}
          fontSize={{ base: "sm", md: "2vw" }} // smaller than title
          fontWeight="semibold"
          mt="4" // margin top
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default Title;
