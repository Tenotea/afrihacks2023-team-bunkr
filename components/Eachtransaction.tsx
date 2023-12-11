import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";
import { Crediticon, Debiticon } from "../assets/icons";

type EachProps = {
  datas: {
    type: string;
    amount: string | number;
    bankName: string;
    date?: string;
  };
  mH?: number;
};

const Eachtransaction = ({ datas, mH }: EachProps) => {
  const { type, amount, bankName, date } = datas;
  const isDebit = type !== "credit";
  const IconToShow = isDebit ? Debiticon : Crediticon;
  const badgeBg = isDebit ? "#241517" : "#11201A";

  return (
    <View style={[styles.eachTransactionWrap, { marginHorizontal: mH }]}>
      <BKView
        centered
        ui={{ backgroundColor: badgeBg, ...styles.transactionBadgeBg }}
      >
        <IconToShow />
      </BKView>
      <View style={{ flex: 1, gap: 6 }}>
        <BKText size={12} weight="extrabold">
          {amount}
        </BKText>
        <BKView row Sbetween>
          <BKText size={10} weight="medium" color={colors.blue20}>
            {bankName}
          </BKText>
          <BKText color={colors.blue20} weight="medium">
            {date}
          </BKText>
        </BKView>
      </View>
    </View>
  );
};

export default Eachtransaction;

const styles = StyleSheet.create({
  eachTransactionWrap: {
    flexDirection: "row",
    backgroundColor: "#0F1014",
    alignItems: "center",
    columnGap: 20,
    paddingLeft: 14,
    paddingRight: 24,
    paddingVertical: 12,
    borderRadius: 5,
    borderColor: "#15171D",
    borderWidth: 1,
  },
  transactionBadgeBg: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
});
