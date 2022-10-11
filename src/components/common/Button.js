import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../helper/colorConstant";
import { fontSize, hp, wp } from "../../helper/utilities";

const Button = ({ onPress, title }) => {
  console.log("Title :;--", title);
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(80),
    shadowRadius: 5,
    shadowOpacity: 0.5,
    borderRadius: wp(3),
    alignItems: "center",
    backgroundColor: "blue",
    paddingVertical: hp(1.5),
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  textStyle: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: fontSize(20),
  },
});

export default Button;
