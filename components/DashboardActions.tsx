import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Banktransfericon,
  Dashboardmoreicon,
  Paybillsicon,
  Transfericon,
} from "../assets/icons";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";
import { useNavigation } from "@react-navigation/native";

const DashboardActions = () => {
  const navigation = useNavigation();
  const actions = [
    {
      Icon: Banktransfericon,
      title: "Bank Transfer",
    },
    {
      Icon: Paybillsicon,
      title: "Pay Bills",
    },
    {
      Icon: Transfericon,
      title: `Schedule\nTransfer`,
    },
    {
      Icon: Dashboardmoreicon,
      title: "More",
    },
  ];

  return (
    <View style={styles.dashboardActionsWrap}>
      {actions.map(({ Icon, title }, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index + title}
            onPress={() => navigation.navigate("Services")}
            style={{ rowGap: 6, alignItems: "center" }}
          >
            <BKView style={styles.eachActionWrap}>{<Icon />}</BKView>
            <BKText size={12}>{title}</BKText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DashboardActions;

const styles = StyleSheet.create({
  dashboardActionsWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 50,
    paddingTop: 30,
  },
  eachActionWrap: {
    padding: 13,
    backgroundColor: colors.brandblue,
    borderRadius: 10,
    alignSelf: "center",
  },
});
