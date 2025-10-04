import { FaRegCalendar } from "react-icons/fa6";

import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CalendarButton = () => {
  return (
     <Button
      as={Link}
      to="/fixturesCalendar"
      variant={"ghost"}
      color={"red"}
      _hover={{ transform: "scale(1.2)" }}
      transition="transform 0.2s"
    >
        <FaRegCalendar size={24} />
    </Button>
  )
}

export default CalendarButton