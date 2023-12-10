import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BKText from "./BKText";

type BtnProps = {
  mT?: number;
  mB?: number;
  onpress: () => void;
  btnText: string;
  btnBg?: string;
};

const BKButton = ({
  onpress,
  btnText,
  btnBg = "#0029FF",
  mT = 0,
  mB = 0,
}: BtnProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.btnWrap,
        { backgroundColor: btnBg, marginBottom: mB, marginTop: mT },
      ]}
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
