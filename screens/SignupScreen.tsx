import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageheaderSubheader, ScrollableWrapper } from "../components";
import { BKButton, BKInput, BKText, BKView } from "../DCommon";
import { Controller, useForm } from "react-hook-form";
import BKLogo from "../DCommon/BKLogo";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({ mode: "all" });

  const goToSecondSignUpScreen = () => {
    // @ts-ignore
    navigation.navigate("ScreenTwo")
  }
  return (
    <ScrollableWrapper>
      <View style={styles.signUpContainer}>
        <BKLogo 
          marginTop={88}
          marginBottom={349}
        />
        <PageheaderSubheader
          headerText="Welcome to the future of finance management"
          subHeaderText="Bunkr makes finance easier and better. To do this, we need access to your existing bank accounts."
        />

        <BKInput
          mT={60}
          mB={23}
          label="Bank verification number"
          control={control}
          name="bvn"
          placeholderText="e.g - 0123456789"
          rules={{
            required: "Phone number is required",
          }}
        />


        <BKInput
          mB={43}
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
          onpress={goToSecondSignUpScreen}
          marginBottom={54}
        />
      </View>
    </ScrollableWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    paddingHorizontal: 34,
  },
});
