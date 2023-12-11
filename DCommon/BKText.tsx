import { StyleSheet, Text, View, TextStyle } from "react-native";
import React from "react";
import { colors } from "../themes";

type TextProps = {
  ui?: TextStyle;
  size?: number;
  color?: string;
  weight?: string;
  styles?: TextProps;
  children: any;
  italized?: boolean;
} & React.ComponentProps<typeof Text>;
const BKText = ({
  ui,
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
    case "black":
      textWeightStyle = {
        fontWeight: "900",
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
        ui,
      ]}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...rest}
    />
  );
};

export default BKText;

const styles = StyleSheet.create({});
