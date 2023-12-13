import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Greetingsheader, Listheaders, Networth, TabWrapper } from "../components";
import { BKButton, BKText, BKView } from "../DCommon";
import { STATS_ACCT } from "../datas";
import { colors } from "../themes";
import {
  LineChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

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

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      // data: [1, 5, 10, 20, 30],
      data: [5, 20, 15, 4, 8, 1, 20],
      color: (opacity = 1) => `#5BFF6C`, // Bezier line color
      strokeWidth: 2, // Bezier line thickness
    },
  ],
};


const Chart = () => {
  return (
    <View style={{  }}>
    <LineChart
      data={data}
      width={screenWidth - 50} // Adjust according to your layout
      height={220} // Adjust according to your layout
      yAxisSuffix="k" // Y-axis label suffix
      yAxisInterval={1} // Y-axis interval
      chartConfig={{
        backgroundGradientFrom: '#0C0D16',
        backgroundGradientTo: '#0C0D16',
        decimalPlaces: 0, // No decimal places for Y-axis labels
        color: (opacity = 1) => `transparent`, // Y-axis label color
        labelColor: (opacity = 1) => `#7E84A5`, // X-axis label color
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '4',
          strokeWidth: '2',
          // stroke: '#ffa726',
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  </View>
  )
}

const AnalyticsScreen = () => {
  return (
    <TabWrapper pH={0}>
      <>
      <View style={{paddingHorizontal: 25}}>
        <Greetingsheader extraInfo="You are view your portfolio analytics" />
      </View>

        <ScrollView>
          <>
            <Networth pB={30} />
            <FlatList
              data={STATS_ACCT}
              scrollEnabled={false}
              numColumns={2}
              style={{ gap: 10 }}
              contentContainerStyle={{ rowGap: 10, columnGap: 10, paddingHorizontal: 25 }}
              columnWrapperStyle={{ gap: 10 }}
              renderItem={EachAccountStat}
            />
          </>
          <View style={{ marginBottom: 48 }}>
            <Listheaders headerTitle="ACCOUNT BALANCE ANALYSIS" mT={31} mB={47} />

            <Chart />
            <BKButton btnText="View full report" btnBg="#0C0D16" onpress={() => console.log("working 🚀")} mT={20} />
          </View>

          {/* <Text style={{ color: "white", marginBottom: 100 }}>Yoooo</Text> */}

          <View style={{ marginBottom: 100 }}>
            <Listheaders headerTitle="CREDIT VS DEBIT" mB={48}/>
            <Chart />
            <BKButton btnText="View full report" btnBg="#0C0D16" onpress={() => console.log("working 🚀")} mT={20} />
          </View>
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
