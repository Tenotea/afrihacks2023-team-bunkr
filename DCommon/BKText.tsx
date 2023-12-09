import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../themes";

type TextProps = {
  size?: number;
  color?: string;
  weight?: string;
  styles?: TextProps;
  children: any;
  italized?: boolean;
};
const BKText = ({
  size = 14,
  color = colors.white,
  weight = "normal",
  italized = false,
  ...rest
}: TextProps) => {
  let textWeightStyle = {};

  switch (weight) {
    case "normal":
      textWeightStyle = {
        fontWeight: "300",
      };
      break;
    case "regular":
      textWeightStyle = {
        fontWeight: "400",
      };
      break;
    case "medium":
      textWeightStyle = {
        fontWeight: "500",
      };
      break;

    case "bold":
      textWeightStyle = {
        fontWeight: "600",
      };
      break;
    case "extrabold":
      textWeightStyle = {
        fontWeight: "700",
      };
      break;
    default:
      textWeightStyle = {
        fontWeight: "400",
      };
      break;
  }

  return (
    <Text
      style={[
        {
          color: color,
          ...textWeightStyle,
          fontSize: size,
          fontStyle: italized ? "italic" : "normal",
        },
      ]}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...rest}
    />
  );
};

export default BKText;

const styles = StyleSheet.create({});
