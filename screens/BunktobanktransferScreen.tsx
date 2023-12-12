import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AmountValue,
  AppWrapper,
  Listheaders,
  WarningBox,
} from "../components";
import { Controller, useForm } from "react-hook-form";
import { BKButton, BKInput } from "../DCommon";

const BunktobanktransferScreen = () => {
  const { control, handleSubmit } = useForm({ mode: "all" });
  return (
    <AppWrapper pH={0} pageTitle="Bunkr to Bank Transfer">
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <AmountValue amount="21,730.00" pT={26} pB={33} />

        <Listheaders headerTitle="TRANSFER FROM" />
        <View style={{ paddingHorizontal: 15 }}>
          {/* <WarningBox warningText="The selected account does not have sufficient balance to process this transfer. Add a supplementary account to process this transaction in one go!" /> */}
        </View>
        <Listheaders headerTitle="TRANSFER TO" />
        <View style={{ paddingHorizontal: 15 }}>
          <BKInput
            mT={25}
            mB={10}
            label="Date of birth"
            control={control}
            name="dob"
            placeholderText="e.g - 0123456789"
            rules={{
              required: "Date of birth is required",
            }}
          />

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

export default BunktobanktransferScreen;

const styles = StyleSheet.create({});
