import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";

const Greetingsheader = ({ extraInfo }: { extraInfo?: string }) => {
  return (
    <BKView Sbetween centered row ui={{ paddingVertical: 20 }}>
      <View style={{}}>
        <BKText size={18} color={colors.brandgreen} weight="extrabold">
          Hi there!{" "}
          <BKText size={18} weight="extrabold">
            Emmanuel
          </BKText>{" "}
        </BKText>
        {Boolean(extraInfo) && <BKText size={12} color={colors.blue10}>
          {extraInfo}
        </BKText>}
      </View>

        <BKView
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            borderWidth: 1,
            borderColor: colors.brandgreen,
          }}
        ></BKView>
    </BKView>
  );
};

export default Greetingsheader;

const styles = StyleSheet.create({});
