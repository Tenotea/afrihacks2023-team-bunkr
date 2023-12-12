import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";
import { Accessbanklogoicon } from "../assets/icons";

const BankAccountTags = ({
  bankName,
  bankBalance,
}: {
  bankName: string;
  bankBalance: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#151726",
        marginTop: 20,
        alignItems: "center",
        columnGap: 20,
        borderRadius: 5,
        marginHorizontal: 25
      }}
    >
      <Accessbanklogoicon />
      <View style={{ gap: 4 }}>
        <BKText size={12} weight="medium">
          Access Bank PLC
        </BKText>
        <BKText size={10} color="#636A8F" weight="medium">
          ₦193,445
        </BKText>
      </View>
    </View>
  );
};

export default BankAccountTags;

const styles = StyleSheet.create({});
