import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Greetingsheader, Networth, TabWrapper } from "../components";
import { BKText, BKView } from "../DCommon";
import { STATS_ACCT } from "../datas";
import { colors } from "../themes";

type StatProps = {
  item: {
    statColor: string;
    bankName: string;
    acctBalance: string;
    percentSpent: number;
  };
};

const EachAccountStat = ({ item }: StatProps) => {
  const { statColor, bankName, acctBalance, percentSpent } = item;

  return (
    <View style={[styles.eachAccountStatWrap, { width: "48%" }]}>
      <BKText size={10} weight="medium" color={colors.blue15} numberOfLines={1}>
        {bankName}
      </BKText>
      <BKView row Sbetween>
        <BKText size={14} weight="extrabold">
          {acctBalance}
        </BKText>
        <View style={{ gap: 2 }}>
          <BKText size={10} weight="medium" color={colors.blue15}>
            {percentSpent}%
          </BKText>

          <View style={[styles.rangeBg, { backgroundColor: statColor + "22" }]}>
            <View
              style={[
                styles.rangeBgOverlay,
                { width: `${percentSpent}%`, backgroundColor: statColor },
              ]}
            />
          </View>
        </View>
      </BKView>
    </View>
  );
};

const AnalyticsScreen = () => {
  return (
    <TabWrapper>
      <>
        <Greetingsheader extraInfo="You are view your portfolio analytics" />

        <ScrollView>
          <>
            <Networth pB={30} />
            <FlatList
              data={STATS_ACCT}
              scrollEnabled={false}
              numColumns={2}
              style={{ gap: 10 }}
              contentContainerStyle={{ rowGap: 10, columnGap: 10 }}
              columnWrapperStyle={{ gap: 10 }}
              renderItem={EachAccountStat}
            />
          </>
        </ScrollView>
      </>
    </TabWrapper>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  eachAccountStatWrap: {
    borderRadius: 9,
    borderColor: "#272A3C",
    borderWidth: 1,
    backgroundColor: "#151726",
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 10,
  },
  rangeBg: {
    width: 48,
    height: 3,
    borderRadius: 3 / 2,
  },
  rangeBgOverlay: {
    height: 3,
    borderRadius: 3,
  },
});
