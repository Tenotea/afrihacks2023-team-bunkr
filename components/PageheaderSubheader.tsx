import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";

const PageheaderSubheader = ({
  headerText,
  subHeaderText,
  centered = false,
}: {
  headerText: string;
  subHeaderText: string;
  centered?: boolean;
}) => {
  return (
    <BKView ui={{ gap: 12, alignItems: centered ? "center" : "flex-start" }}>
      <BKText size={27} weight="bold">
        {headerText}
      </BKText>
      <BKText
        size={14}
        color={colors.blue10}
        ui={{ textAlign: centered ? "center" : "left" }}
      >
        {subHeaderText}
      </BKText>
    </BKView>
  );
};

export default PageheaderSubheader;

const styles = StyleSheet.create({});
