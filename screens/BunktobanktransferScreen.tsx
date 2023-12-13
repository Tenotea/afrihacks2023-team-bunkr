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


      <ScrollView showsVerticalScrollIndicator={false}>

        <AmountValue amount="21,730.00" pT={26} pB={33} />

        <Listheaders headerTitle="TRANSFER FROM" />
        <View style={{ padding: 25 }}>
          {false && <WarningBox warningText="The selected account does not have sufficient balance to process this transfer. Add a supplementary account to process this transaction in one go!" />}

          <BKInput 
          mB={10}
          control={control}
          name="dob"
          placeholderText="e.g - 0123456789"
          rules={{
            required: "Account Number is required",
          }}
          type="dropdown"
          onPress={() => console.log("yes")}
          
          />
        </View>


        <Listheaders headerTitle="TRANSFER TO" />
        <View style={{ padding: 25 }}>
          <BKInput
            mB={10}
            label="Account Number"
            control={control}
            name="dob"
            placeholderText="e.g - 0123456789"
            rules={{
              required: "Account Number is required",
            }}
          />

          <BKInput 
          mB={10}
          control={control}
          name="dob"
          placeholderText="e.g - 0123456789"
          rules={{
            required: "Account Number is required",
          }}
          type="dropdown"
          onPress={() => console.log("yes")}
          
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
