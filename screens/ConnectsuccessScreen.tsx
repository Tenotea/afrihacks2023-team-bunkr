import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";
import { BKButton, BKText } from "../DCommon";
import { useAuth } from "../hooks";
const Confetti = require("../assets/confetti.png");

const ConnectsuccessScreen = ({ navigation }) => {
  const {setToken} = useAuth()
  return (
    <PageWrapper scroll={false}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image
            source={Confetti}
            style={{
              width: 128,
              height: 128,
              marginBottom: 28,
            }}
          />
          <BKText color="#A1ABE2">
            Congratulations on connecting your bank to Bunkr.{" "}
          </BKText>
          <BKText size={27} weight="extrabold">
            Do you want to connect another account?
          </BKText>
        </View>

        <View style={{flexDirection: "row", gap: 20}}>
          <BKButton
            btnText="Skip for now"
            onpress={() => setToken(true)}
            mT={60}
            btnBg="#1F2232"
            full={false}
          />
          <BKButton
            btnText="Yes, Please"
            onpress={() => navigation.navigate("Connectbank")}
            mT={60}
            full={false}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

export default ConnectsuccessScreen;

const styles = StyleSheet.create({});
