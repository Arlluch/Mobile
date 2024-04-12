import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Function to get the days in a specific month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const grid = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      grid.push(i);
    }

    return grid;
  };

  const goToPreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    setSelectedDay(null);
  };

  const goToNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderCalendarGrid = () => {
    const grid = generateCalendarGrid();
    return grid.map((day, index) => {
      let style = styles.dayContainer;
      let isActive = false;

      if (day) {
        if (
          [14, 15, 16, 17, 25, 26, 27].includes(day) &&
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear()
        ) {
          style = [styles.dayContainer, styles.activeDay];
          isActive = true;
        }

        if (isActive) {
          return (
            <TouchableOpacity
              key={index}
              style={style}
              onPress={() => handleDayClick(day)}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <View key={index} style={style}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          );
        }
      } else {
        return <View key={index} style={style}></View>;
      }
    });
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.navigation}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYear}>
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.navigation}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekDays}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.daysContainer}>{renderCalendarGrid()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "90%",
  },
  navigation: {
    fontSize: 24,
  },
  monthYear: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calendar: {
    alignItems: "center",
    width: "90%",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weekDay: {
    width: 55,
    textAlign: "center",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayContainer: {
    width: 48,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    margin: 2,
  },
  dayText: {
    fontSize: 16,
  },
  activeDay: {
    backgroundColor: "#FFB200",
  },
  clickedDay: {
    backgroundColor: "#FF8E00",
  },
});

export default Calendar;
