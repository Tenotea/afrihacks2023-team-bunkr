import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Accountwarningicon } from "../assets/icons";
import { BKButton, BKText } from "../DCommon";
import { colors } from "../themes";

const OnScreenAlert = ({
  alertMsg,
  alertAction,
  btnText,
}: {
  alertMsg: string;
  alertAction: string;
  btnText: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        gap: 20,
        paddingVertical: 30,
      }}
    >
      {alertMsg && <View style={{ gap: 12, flexDirection: "row", flex: 1 }}>
        <Accountwarningicon />
        <BKText color="#A1ABE2" ui={{ flex: 1 }}>
          {alertMsg}
        </BKText>
      </View>}
      <BKButton
        btnText={btnText}
        btnBg={colors.brandblue}
        onpress={() => console.log("Accountinfo")}
      />
    </View>
  );
};

export default OnScreenAlert;

const styles = StyleSheet.create({});
