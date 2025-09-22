// src/components/ImageCarousel.tsx
import { useState } from "react";
import { Box, Flex, IconButton, Image} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" w="100%" maxW="800px" mx="auto" overflow="hidden">
      <Flex overflow="hidden" w="100%" borderRadius="2xl" position="relative">
        <Flex
          transform={`translateX(-${current * 100}%)`}
          transition="transform 0.6s ease"
          w={`${images.length * 100}%`}
        >
          {images.map((src, idx) => (
            <Box key={idx} flex="0 0 100%" position="relative" h="400px">
              <Image
                src={src}
                alt={`slide-${idx}`}
                objectFit="cover" // cover entire Box
                w="100%"
                h="100%" // make Image fill parent
                borderRadius="2xl"
              />
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Left Arrow */}
      <IconButton
        aria-label="Previous Slide"
        icon={<ChevronLeft size={28} />}
        position="absolute"
        top="50%"
        left="4"
        transform="translateY(-50%)"
        borderRadius="full"
        colorScheme="red"
        onClick={prevSlide}
      />

      {/* Right Arrow */}
      <IconButton
        aria-label="Next Slide"
        icon={<ChevronRight size={28} />}
        position="absolute"
        top="50%"
        right="4"
        transform="translateY(-50%)"
        borderRadius="full"
        colorScheme="red"
        onClick={nextSlide}
      />
    </Box>
  );
};

export default ImageCarousel;
