import React from "react";
import { Button as Btn, StyleSheet, View } from "react-native";

const Button = () => {
  return (
    <View>
      <Btn
        title="Alert"
        color="#1778F2"
        onPress={() => alert("Alert Button pressed")}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
