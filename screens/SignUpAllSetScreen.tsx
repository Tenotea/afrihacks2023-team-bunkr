import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PageWrapper,
  PageheaderSubheader,
  ScrollableWrapper,
} from "../components";
import { BKButton } from "../DCommon";

const Confetti = require("../assets/confetti.png");

const SignUpAllSetScreen = () => {
  return (
    <PageWrapper>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            source={Confetti}
            style={{
              width: 128,
              height: 128,
              marginBottom: 28,
            }}
          />

          <PageheaderSubheader
            headerText="You are all set"
            subHeaderText="We have successfully verified your information. Let’s get you started on an hitch-free financial journey!"
          />
        </View>

        <BKButton
          btnText="Let's Go!"
          onpress={() => console.log("Clicked 🚀")}
        />
      </View>
    </PageWrapper>
  );
};

export default SignUpAllSetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
