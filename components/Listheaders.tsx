import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";

const Listheaders = ({
  headerTitle,
  mT = 0,
  mB = 0,
}: {
  headerTitle: string;
  mT?: number;
  mB?: number;
}) => {
  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 25,
        backgroundColor: "#151726",
        marginTop: mT,
        marginBottom: mB,
      }}
    >
      <BKText size={10} weight="bold" color="#B5C0FB">
        {headerTitle}
      </BKText>
    </View>
  );
};

export default Listheaders;

const styles = StyleSheet.create({});
