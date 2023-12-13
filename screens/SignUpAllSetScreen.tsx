import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PageWrapper,
  PageheaderSubheader,
  ScrollableWrapper,
} from "../components";
import { BKButton } from "../DCommon";

const Confetti = require("../assets/confetti.png");

const SignUpAllSetScreen = ({navigation}) => {
  return (
    <PageWrapper scroll={false}>
      <View style={{flex: 1, }}>


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
            centered
            headerText="You are all set"
            subHeaderText="We have successfully verified your information. Let’s get you started on an hitch-free financial journey!"
          />
        </View>

        <BKButton
          btnText="Let's Go!"
          onpress={() => navigation.navigate("Connectsuccess")}
          mT={50}
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
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
