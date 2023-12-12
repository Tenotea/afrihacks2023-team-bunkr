import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppWrapper,
  BankCards,
  Eachtransaction,
  Listheaders,
} from "../components";
import { RECENT_TRANSACTIONS } from "../datas";

const AccountinfoScreen = () => {
  const item = {
    type: "PRIMARY ACCOUNT",
    acctBalance: "₦193,445",
    acctNumber: "1928840934",
    bankName: "ACCESS BANK PLC",
  };

  const ListHeader = () => {
    return (
      <>
        <View style={{ paddingHorizontal: 25, paddingBottom: 32 }}>
          <BankCards item={item} full />
        </View>

        <Listheaders headerTitle="ACCOUNT" />
        <View style={{ height: 50 }} />
        <Listheaders headerTitle="RECENT TRANSACTIONS" mB={24} />
      </>
    );
  };
  return (
    <AppWrapper pH={0} pageTitle="Account Information">
      <>
        <FlatList
          data={RECENT_TRANSACTIONS}
          ListHeaderComponent={ListHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => {
            return <Eachtransaction datas={item} mH={14} />;
          }}
        />
      </>
    </AppWrapper>
  );
};

export default AccountinfoScreen;

const styles = StyleSheet.create({});
