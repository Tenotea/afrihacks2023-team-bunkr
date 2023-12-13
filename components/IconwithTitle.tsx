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
      onPress={action ? () => navigation.navigate(action) : () => console.log(title)}
      style={{
        borderWidth: 1,
        borderColor: "#0F111C",
        paddingVertical: 14,
        alignItems: "center",
        rowGap: 5,
        flex: 1,
        maxWidth: 100,
        minWidth: 80,
      }}
    >
      <Icon />
      <BKText size={12} color="#7E84A5" ui={{ width: 80, textAlign: "center" }}>
        {title}
      </BKText>
    </TouchableOpacity>
  );
};

export default IconwithTitle;

const styles = StyleSheet.create({});
