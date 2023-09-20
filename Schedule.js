import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import BACK_ICON from "./assets/icons/icon-back.png";
import CART_ICON from "./assets/icons/icon-cart.png";
import ARROW_FORWARD from "./assets/icons/arrow-downward-fill.png";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import DatePicker from "react-native-date-picker";
const Schedule = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(
    new Date(new Date().setHours(date.getHours() + 1))
  );
  const [openTimeStart, setOpenTimeStart] = useState(false);
  const [openTimeEnd, setOpenTimeEnd] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    "UberMove-Medium": require("./assets/fonts/UberMove-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function isToday(date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  function formatDateToCustomFormat(date) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${
      isToday(date) ? "Today," : ""
    } ${dayOfWeek}, ${month} ${dayOfMonth}`;
  }

  function formatTimestampToAMPM(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const selectDate = () => {
    setOpenDate(true);
  };

  const selectStartTime = () => {
    setOpenTimeStart(true);
    setOpenDate(false);
    setOpenTimeEnd(false);
  };

  const selectEndTime = () => {
    setOpenTimeEnd(true);
    setOpenDate(false);
    setOpenTimeStart(false);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <StatusBar style="auto" />
        <View style={styles.row}>
          <Image source={BACK_ICON} />
          <Text>Pick a time</Text>
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
            <Image source={CART_ICON} />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.page}>
        <View>
          <TouchableOpacity
            onPress={selectDate}
            style={styles.dropDownPickerContainer}
          >
            <Text style={styles.dateText}>
              {formatDateToCustomFormat(date)}
            </Text>
            <Image source={ARROW_FORWARD} />
          </TouchableOpacity>
          <Text style={styles.timeText}>Start Time</Text>
          <TouchableOpacity
            onPress={selectStartTime}
            style={styles.dropDownPickerContainer}
          >
            <Text style={styles.dateText}>
              {formatTimestampToAMPM(timeStart)}
            </Text>
            <Image source={ARROW_FORWARD} />
          </TouchableOpacity>
          <Text style={styles.timeText}>End Time</Text>
          <TouchableOpacity
            onPress={selectEndTime}
            style={styles.dropDownPickerContainer}
          >
            <Text style={styles.dateText}>
              {formatTimestampToAMPM(timeEnd)}
            </Text>
            <Image source={ARROW_FORWARD} />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={openDate}
          mode="date"
          date={date}
          onConfirm={(date) => {
            setOpenDate(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
        <DatePicker
          modal
          open={openTimeStart}
          mode="time"
          date={timeStart}
          onConfirm={(date) => {
            setOpenTimeStart(false);
            setTimeStart(date);
          }}
          onCancel={() => {
            setOpenTimeStart(false);
          }}
        />
        <DatePicker
          modal
          open={openTimeEnd}
          mode="time"
          date={timeEnd}
          onConfirm={(date) => {
            setOpenTimeEnd(false);
            setTimeEnd(date);
          }}
          onCancel={() => {
            setOpenTimeEnd(false);
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.whiteText}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.grayButton}>
            <Text style={styles.blackText}>Pick up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: "#FFFFFF",
  },
  top: {
    display: "flex",
    flex: 1,
  },
  page: {
    flex: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    width: "100%",
    maxHeight: 30,
    marginTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: "gray",
    height: 1,
    marginTop: 10,
    width: "100%",
  },
  dropDownPickerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: 15,
  },
  dateText: {
    fontSize: 16,
    // fontWeight: "600",
    textAlign: "left",
    color: "#545454",
    fontFamily: "UberMove-Medium",
  },
  timeText: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    // fontWeight: "600",
    textAlign: "left",
    color: "#545454",
    fontFamily: "UberMove-Medium",
  },
  buttonContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  blueButton: {
    width: "100%",
    backgroundColor: "#4460EF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  grayButton: {
    width: "100%",
    backgroundColor: "#EEEEEE",
    padding: 15,
    borderRadius: 10,
  },
  whiteText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "UberMove-Medium",
  },
  blackText: {
    color: "#0D1317",
    textAlign: "center",
    fontFamily: "UberMove-Medium",
    fontSize: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#4460EF",
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    top: -10,
    left: 10,
    zIndex: 1000,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
