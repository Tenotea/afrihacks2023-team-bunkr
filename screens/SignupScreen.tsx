import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper, PageheaderSubheader } from "../components";
import { BKButton, BKInput, BKText, BKView } from "../DCommon";
import { Controller, useForm } from "react-hook-form";

const SignupScreen = () => {
  const { control, handleSubmit } = useForm({ mode: "all" });
  return (
    <PageWrapper>
      <>
        <PageheaderSubheader
          headerText="Welcome to the future of finance management"
          subHeaderText="Bunkr makes finance easier and better. To do this, we need access to your existing bank accounts."
        />

        <BKInput
          label="Bank verification number"
          control={control}
          name="bvn"
          placeholderText="e.g - 0123456789"
          rules={{
            required: "Phone number is required",
          }}
        />
        <BKButton
          btnText="Continue"
          onpress={() => console.log("Clicked button")}
        />
      </>
    </PageWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
