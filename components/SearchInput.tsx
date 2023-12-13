import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { BKText } from "../DCommon";
import { Inputsearchicon } from "../assets/icons";
import { colors } from "../themes";

const SearchInput = () => {
  return (
    <View
      style={{
        backgroundColor: "#151726",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 28,
        paddingHorizontal: 16,
      }}
    >
      <Inputsearchicon />
      <TextInput
        style={{
          flex: 1,
          height: 40,
          paddingHorizontal: 10,
          color: colors.white,
          fontSize: 12,
          fontFamily: "SatoshiRegular",
          fontWeight: "500",
        }}
        placeholder="Find a service"
        placeholderTextColor="#313442"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
