import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AmountValue,
  AppWrapper,
  Listheaders,
  WarningBox,
} from "../components";
import { BKButton, BKInput } from "../DCommon";



const B2btransferScreen = () => {



  return (
    <AppWrapper pH={0} pageTitle="Bunkr to Bunkr Transfer">
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <AmountValue amount="21,730.00" pT={26} pB={33} />

        <Listheaders headerTitle="TRANSFER FROM" />
        <View style={{ paddingHorizontal: 15 }}>
          <WarningBox warningText="The selected account does not have sufficient balance to process this transfer. Add a supplementary account to process this transaction in one go!" />
        </View>
        <Listheaders headerTitle="TRANSFER TO" />
        <View style={{ paddingHorizontal: 15 }}>
          <BKButton
            btnText="Continue"
            btnBg="#1F2232"
            onpress={() => console.log("yes")}
          />
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default B2btransferScreen;

const styles = StyleSheet.create({});
