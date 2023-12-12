import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";
import { Accessbanklogoicon } from "../assets/icons";

const BankCards = ({ item, full }: { item: any; full?: boolean }) => {
  const { type, acctBalance, acctNumber, bankName } = item;
  return (
    <View style={[styles.bankCardsWrap, { width: full ? "100%" : 330 }]}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <BKView row centered Sbetween end>
          <View>
            <BKText size={10} color={colors.blue20} weight="extrabold">
              {type}
            </BKText>
            <BKText size={24} weight="medium">
              {acctBalance}
            </BKText>
          </View>
          <Accessbanklogoicon />
        </BKView>

        <BKView row Sbetween>
          <BKText size={10} color={colors.blue15} weight="medium">
            {acctNumber}
          </BKText>
          <BKText size={10} color={colors.blue15} weight="medium">
            {bankName}
          </BKText>
        </BKView>
      </View>
    </View>
  );
};

export default BankCards;

const styles = StyleSheet.create({
  bankCardsWrap: {
    height: 154,
    backgroundColor: "rgba(39, 42, 60, 0.3)",
    borderRadius: 10,
    borderColor: "#272A3C",
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingBottom: 18,
    paddingTop: 38,
  },
});
