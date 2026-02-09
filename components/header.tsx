import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

// This includes Hamburger menu, Facebook logo, Create Post Icon, Search Icon, Messenger Icon
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Octicons name="three-bars" size={24} color="black" />
        <Image
          source={
            // uri: "https://upload.wikimedia.org/wikipedia/commons/8/87/Facebook_Logo_%282015%29_light.svg",
            require("../assets/images/facebook-logo.png")
          }
          style={styles.logo}
        />
      </View>
      <View style={styles.rightContainer}>
        <Feather name="plus-square" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <FontAwesome6 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    // backgroundColor: '#FFFFFF',
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
});
