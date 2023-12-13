import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";
import { Accessbanklogoicon } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";

const BankAccountTags = ({
  bankName,
  bankBalance,
}: {
  bankName: string;
  bankBalance: string;
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Accountinfo")}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#151726",
        marginTop: 20,
        alignItems: "center",
        columnGap: 20,
        borderRadius: 5,
        marginHorizontal: 25,
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
    </TouchableOpacity>
  );
};

export default BankAccountTags;

const styles = StyleSheet.create({});
