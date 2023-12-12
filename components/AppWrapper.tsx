import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../themes";
import { BKText } from "../DCommon";
import { Backarrowicon } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";

const AppWrapper = ({
  children,
  pageTitle,
  pH = 15,
}: {
  children: React.ReactElement;
  pageTitle: string;
  pH?: number;
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        // paddingHorizontal: 24,
      }}
    >
      <StatusBar animated={true} barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 15,
          borderBottomColor: "#0F111C",
          borderWidth: 1,
        }}
      >
        <Pressable hitSlop={30} onPress={() => navigation.goBack()}>
          <Backarrowicon />
        </Pressable>
        <BKText size={18} weight="black" ui={{ flex: 1, textAlign: "center" }}>
          {pageTitle}
        </BKText>
        <View style={{ width: 16 }} />
      </View>
      <View style={{ flex: 1, paddingHorizontal: pH }}>{children}</View>
    </SafeAreaView>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({});
