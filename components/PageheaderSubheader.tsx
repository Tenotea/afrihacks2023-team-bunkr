import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";

const PageheaderSubheader = ({
  headerText,
  subHeaderText,
}: {
  headerText: string;
  subHeaderText: string;
}) => {
  return (
    <BKView ui={{ gap: 12 }}>
      <BKText size={27} weight="bold">
        {headerText}
      </BKText>
      <BKText size={14} color={colors.blue10}>
        {subHeaderText}
      </BKText>
    </BKView>
  );
};

export default PageheaderSubheader;

const styles = StyleSheet.create({});
