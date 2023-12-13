import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Eachtransaction, TabWrapper } from "../components";
import { RECENT_TRANSACTIONS } from "../datas";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";
import { Dropdownicon } from "../assets/icons";

const HistoryScreen = () => {
  const InoutFlows = () => {
    return (
      <View style={styles.inoutflowWrap}>
        <BKView row Sbetween>
          <View>
            <BKText size={7} color={colors.blue15} weight="medium">
              INFLOW
            </BKText>
            <BKText size={14} weight="extrabold" color={colors.blue35}>
              ₦1,226,640
            </BKText>
          </View>

          <View>
            <BKText
              size={7}
              color={colors.blue15}
              weight="medium"
              ui={{ textAlign: "right" }}
            >
              OUTFLOW
            </BKText>
            <BKText size={14} weight="extrabold" color={colors.blue35}>
              ₦1,226,640
            </BKText>
          </View>
        </BKView>

        <View
          style={{
            height: 6,
            backgroundColor: colors.brandgreen,
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  const AccountAndDatesSelect = () => {
    return (
      <View style={styles.accountDateSelectWrap}>
        <View style={styles.optionSelectWrap}>
          <BKText size={10} weight="medium" color={colors.blue35}>
            All accounts
          </BKText>
          <Dropdownicon />
        </View>
        <View style={styles.optionSelectWrap}>
          <BKText size={10} weight="medium" color={colors.blue35}>
            December
          </BKText>
          <Dropdownicon />
        </View>
        <View style={styles.optionSelectWrap}>
          <BKText size={10} weight="medium" color={colors.blue35}>
            2023
          </BKText>
          <Dropdownicon />
        </View>
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <>
        <InoutFlows />
        <AccountAndDatesSelect />
      </>
    );
  };


  return (
    <TabWrapper pH={25}>
      <>
        <BKView row Sbetween centered ui={{ paddingVertical: 12 }}>
          <BKText size={18} weight="extrabold">
            Transaction History
          </BKText>

          {/* To replcae this with the user image */}
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              borderColor: colors.brandgreen,
              borderWidth: 1,
            }}
          ></View>
        </BKView>

        <FlatList
          data={RECENT_TRANSACTIONS}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={{ paddingBottom: 80 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => {
            return <Eachtransaction datas={item} />;
          }}
        />
      </>
    </TabWrapper>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  inoutflowWrap: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: "#151726",
    borderRadius: 6,
    gap: 18,
    marginBottom: 10,
    marginTop: 50,
  },
  optionSelectWrap: {
    flexDirection: "row",
    backgroundColor: "#151726",
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
    borderRadius: 3,
    alignItems: "center",
    gap: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  accountDateSelectWrap: {
    flexDirection: "row",
    flex: 1,
    gap: 7,
    marginBottom: 30,
  },
});
