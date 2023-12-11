import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PageWrapper,
  PageheaderSubheader,
  ScrollableWrapper,
  WarningBox,
} from "../components";
import { BKButton, BKInput, BKText, BKView } from "../DCommon";
import { Controller, useForm } from "react-hook-form";
import BKLogo from "../DCommon/BKLogo";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../themes";

const SignUpTwoScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({ mode: "all" });

  const goToPhoneNumberVerificationScreen = () => {
    // @ts-ignore
    navigation.navigate("VerifyNumberScreen");
  };
  return (
    <PageWrapper>
      <View style={{ flex: 1 }}>

        <BKText color={colors.blue5}>Hi there!</BKText>

        <PageheaderSubheader
          headerText="Emmanuel Adelakun"
          subHeaderText="You are one step closer to enjoying the financial freedom you’ve always imagined"
        />

        <WarningBox
          type="success"
          warningText="Please ensure you have access to your phone number +23480******34 as you
        will need to verify it before your account is provisioned."
        />

        <BKInput
          label="Email Address"
          control={control}
          name="bvn"
          placeholderText="e.g - username@website.com"
          rules={{
            required: "Email Address is required",
          }}
          mB={16}
        />

        <BKInput
          label="Password"
          control={control}
          name="dob"
          placeholderText="********"
          rules={{
            required: "Date of birth is required",
          }}
          mB={42}
        />

        <BKButton
          btnText="Continue"
          onpress={goToPhoneNumberVerificationScreen}
        />
      </View>
    </PageWrapper>
  );
};

export default SignUpTwoScreen;

const styles = StyleSheet.create({

});
