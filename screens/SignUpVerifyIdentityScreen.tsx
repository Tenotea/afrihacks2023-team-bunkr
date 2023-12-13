import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { PageWrapper, ScrollableWrapper } from "../components";
import BKLogo from "../DCommon/BKLogo";
import { BKButton, BKText, BKView } from "../DCommon";
import { useNavigation } from "@react-navigation/native";
import { useInsets } from "../hooks";

const VerificationImg = require("../assets/verificationImage.png");

const SignUpVerifyIdentityScreen = () => {
  const navigation = useNavigation();
  const { deviceHeight } = useInsets();

  const goToAllSetScreen = () => {
    // @ts-ignore
    navigation.navigate("AllSetScreen");
  };
  return (
    <PageWrapper scroll={false}>
      <View
        style={[
          {
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1
          },
        ]}
      >
        <BKText children={"Verify your identity"} size={27} weight="bold" />
        <Image
          source={VerificationImg}
          style={[
            {
              width: deviceHeight / 3, // this will backfire on other screen sizes
              height: deviceHeight / 3,
            },
          ]}
        />
        <View style={{ alignSelf: "stretch" }}>
          <BKButton btnText="Verify my identity" onpress={goToAllSetScreen} />
        </View>
      </View>
    </PageWrapper>
  );
};

export default SignUpVerifyIdentityScreen;

const styles = StyleSheet.create({
  
});
