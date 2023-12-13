import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppWrapper,
  BankCards,
  Eachtransaction,
  IconwithTitle,
  Listheaders,
} from "../components";
import { RECENT_TRANSACTIONS } from "../datas";
import { B2bicon } from "../assets/icons";

const accountActions = [
  {
    title: "Beneficiaries",
  },
  {
    title: "Generate statement",
  },
  {
    title: "Payment Links",
  },
  {
    title: "Invoices",
  },
  {
    title: "Disconnect Account",
  },
];

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

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {accountActions.map((data, index) => {
            return (
              <IconwithTitle
                key={index+data.title}
                action={data.action}
                Icon={B2bicon}
                title={data.title}
              />
            );
          })}
        </View>

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
