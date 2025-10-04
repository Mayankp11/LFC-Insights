// src/components/Calendar.tsx
import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Fixture {
  date: string;
  image?: string;
}

interface CalendarProps {
  fixtures?: Fixture[];
}

const Calendar: React.FC<CalendarProps> = ({ fixtures = [] }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const monthStart = currentDate.startOf("month");
  const monthEnd = currentDate.endOf("month");
  const startDate = monthStart.startOf("week"); // ensures Sunday start
  const endDate = monthEnd.endOf("week");

  const rows: dayjs.Dayjs[][] = [];
  let day = startDate;

  while (day.isBefore(endDate, "day")) {
    const week: dayjs.Dayjs[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day = day.add(1, "day");
    }
    rows.push(week);
  }

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const getFixture = (date: dayjs.Dayjs) => {
    return fixtures.find((f) => dayjs(f.date).isSame(date, "day"));
  };

  return (
    <Box
      w="100%"
      maxW="700px"
      mx="auto"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      shadow="sm"
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <IconButton
          aria-label="Previous Month"
          icon={<AiOutlineLeft />}
          onClick={prevMonth}
          variant="ghost"
        />
        <Text fontSize="xl" fontWeight="bold">
          {currentDate.format("MMMM YYYY")}
        </Text>
        <IconButton
          aria-label="Next Month"
          icon={<AiOutlineRight />}
          onClick={nextMonth}
          variant="ghost"
        />
      </Flex>

      {/* Weekdays */}
      <SimpleGrid columns={7} mb={2}>
        {weekDays.map((day) => (
          <Text key={day} textAlign="center" fontWeight="bold" fontSize="sm">
            {day}
          </Text>
        ))}
      </SimpleGrid>

      {/* Calendar Grid */}
      <Box>
        {rows.map((week, i) => (
          <SimpleGrid key={i} columns={7} spacing={1}>
            {week.map((date) => {
              const isCurrentMonth = date.month() === currentDate.month();
              const fixture = getFixture(date);

              return (
                <AspectRatio ratio={1} w="100%">
                  <Box
                    key={date.toString()}
                    borderWidth="1px"
                    borderRadius="md"
                    textAlign="center"
                    bg={isCurrentMonth ? "white" : "gray.100"}
                    color={isCurrentMonth ? "black" : "gray.400"}
                    position="relative"
                    backgroundImage={
                      fixture?.image ? `url(${fixture.image})` : "none"
                    }
                    backgroundSize="60%" // ✅ control image size (e.g., 60% of box)
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    
                  >
                    {!fixture?.image && (
                      <Text fontSize="sm" fontWeight="bold">
                        {date.date()}
                      </Text>
                    )}
                  </Box>
                </AspectRatio>
              );
            })}
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
