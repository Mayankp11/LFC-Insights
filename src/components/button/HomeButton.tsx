import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const HomeButton = () => {
  return (
    <Button
      as={Link}
      to="/"
      variant={"ghost"}
      color={"red"}
      _hover={{ transform: "scale(1.2)" }}
      transition="transform 0.2s"
    >
      <IoMdHome size={28} />
    </Button>
  );
};

export default HomeButton;
