import { StyleSheet, Text, View } from "react-native";
import React from "react";

type TextProps = {
  size?: number;
  color?: string;
  weight?: number;
  styles?: TextProps;
};
const BKText = ({
  styles,
  size = 14,
  color = "#fff",
  weight = 300,
  ...rest
}: TextProps) => {
  return (
    <Text
      style={[
      
        styles,
        {
            fontFamily: "SatoshiRegular",
            fontSize: size,
            fontWeight: `${weight}`,
            color: color,
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
