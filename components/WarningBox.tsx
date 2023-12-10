import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";
import { colors } from "../themes";

type Props = {
  type?: "success" | "warning";
  warningText: string;
};
const WarningBox = ({ type = "warning", warningText }: Props) => {
  let bgColor =
    type == "success" ? `rgba(91, 255, 108, 0.05)` : `rgba(255, 193, 7, 0.05)`;
  let textColor = type == "success" ? colors.brandgreen : colors.yellow10;

  return (
    <View
      style={[
        styles.warningWrap,
        {
          borderColor: textColor,
          backgroundColor: bgColor,
        },
      ]}
    >
      <BKText color={textColor}>{warningText}</BKText>
    </View>
  );
};

export default WarningBox;

const styles = StyleSheet.create({
  warningWrap: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginVertical: 30,
  },
});
