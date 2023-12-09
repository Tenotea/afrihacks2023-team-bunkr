import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BKText from "./BKText";

type BtnProps = {
  onpress: () => void;
  btnText: string;
  btnBg?: string;
};

const BKButton = ({ onpress, btnText, btnBg = "#0029FF" }: BtnProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.btnWrap, { backgroundColor: btnBg }]}
      onPress={onpress}
    >
      <BKText size={12} weight="bold">
        {btnText}
      </BKText>
    </TouchableOpacity>
  );
};

export default BKButton;

const styles = StyleSheet.create({
  btnWrap: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
