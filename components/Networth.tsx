import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";

const Networth = ({ pB = 60, pT = 30 }) => {
  return (
    <BKView centered ui={{ paddingBottom: pB, paddingTop: pT }}>
      <BKText size={10} weight="medium" color={colors.blue15}>
        YOUR NET WORTH
      </BKText>
      <BKText size={40} weight="medium">
        ₦226,640
      </BKText>
    </BKView>
  );
};

export default Networth;

const styles = StyleSheet.create({});
