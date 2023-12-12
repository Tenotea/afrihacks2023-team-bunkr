import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";

const AmountValue = ({
  amount,
  pT = 0,
  pB = 0,
}: {
  pT?: number;
  pB?: number;
  amount: string;
}) => {
  return (
    <View style={{ alignItems: "center", paddingTop: pT, paddingBottom: pB }}>
      <BKText size={12}>Amount</BKText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <BKText size={20} color="#7E84A5">
          ₦
        </BKText>
        <BKText size={40} weight="medium" ui={{ alignItems: "center" }}>
          {amount}
        </BKText>
      </View>
    </View>
  );
};

export default AmountValue;

const styles = StyleSheet.create({});
