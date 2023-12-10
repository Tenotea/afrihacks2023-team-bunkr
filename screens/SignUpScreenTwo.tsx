import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageheaderSubheader, ScrollableWrapper } from "../components";
import { BKButton, BKInput, BKText, BKView } from "../DCommon";
import { Controller, useForm } from "react-hook-form";
import BKLogo from "../DCommon/BKLogo";
import { useNavigation } from "@react-navigation/native";

const SignUpScreenTwo = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({ mode: "all" });

  const goToPhoneNumberVerificationScreen = () => {
    // @ts-ignore
    navigation.navigate('VerifyNumberScreen');
  }
  return (
    <ScrollableWrapper>
      <View style={styles.signUpContainer}>
        <BKLogo 
          marginTop={88}
          marginBottom={298}
        />

        <BKText 
            children={"Hi there!"}
        />

        <PageheaderSubheader
          headerText="Emmanuel Adelakun"
          subHeaderText="You are one step closer to enjoying the financial freedom you’ve always imagined"
        />

        <View style={styles.verificationContainer}>
            <BKText 
                children={"Please ensure you have access to your phone number +23480******34 as you will need to verify it before your account is provisioned."}
                color="#5BFF6C"
            />
        </View>

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
          mB={43}
        />
        

        <BKButton
          btnText="Continue"
        //   onpress={() => console.log("Clicked")}
          onpress={goToPhoneNumberVerificationScreen}
          marginBottom={54}
        />
      </View>
    </ScrollableWrapper>
  );
};

export default SignUpScreenTwo;

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    paddingHorizontal: 34,
  },

  verificationContainer: {
    borderWidth: 1,
    borderColor: "#5BFF6C",
    paddingVertical: 14, 
    paddingLeft: 17, 
    paddingRight: 7, 
    borderRadius: 10,
    marginVertical: 30,
  }
});
