import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BKText from "./BKText";
import { colors } from "../themes";

const BKLogo = ({}) => {
  return (
    <View>
      <BKText weight="black" size={18} color={colors.brandblue}>
        <BKText weight="black" size={18} color={colors.brandgreen}>
          bunkr.
        </BKText>
        finance
      </BKText>
    </View>
  );
};

export default BKLogo;
