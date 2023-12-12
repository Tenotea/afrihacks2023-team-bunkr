import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AmountValue,
  AppWrapper,
  IconwithTitle,
  Listheaders,
} from "../components";
import { B2bicon } from "../assets/icons";

const ServicesScreen = ({ navigation }) => {
  return (
    <AppWrapper pageTitle="Services" pH={0}>
      <>
        <Listheaders headerTitle="TRANSFERS" />
        <IconwithTitle
          action="Bunk2banktransfer"
          Icon={B2bicon}
          title="Bunkr to Bank Transfer"
        />
      </>
    </AppWrapper>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
