import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BKText } from "../DCommon";
import { useNavigation } from "@react-navigation/native";

const IconwithTitle = ({
  Icon,
  title,
  action,
}: {
  Icon: any;
  title: string;
  action: string;
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(action)}
      style={{
        borderWidth: 1,
        borderColor: "#0F111C",
        paddingHorizontal: 25,
        paddingVertical: 14,
        alignItems: "center",
        rowGap: 5,
      }}
    >
      <Icon />
      <BKText
        size={12}
        color="#7E84A5"
        ui={{ maxWidth: 80, textAlign: "center" }}
      >
        {title}
      </BKText>
    </TouchableOpacity>
  );
};

export default IconwithTitle;

const styles = StyleSheet.create({});
