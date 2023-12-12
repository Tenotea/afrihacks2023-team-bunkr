import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BankAccountTags,
  Greetingsheader,
  Listheaders,
  TabWrapper,
} from "../components";
import { Accountwarningicon } from "../assets/icons";
import { BKButton, BKText } from "../DCommon";
import { colors } from "../themes";

const AccountScreen = ({navigation}) => {



  const ListHeader = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            gap: 20,
            paddingVertical: 40,
          }}
        >
          <View style={{ gap: 12, flexDirection: "row", flex: 1 }}>
            <Accountwarningicon />
            <BKText color="#A1ABE2" ui={{ flex: 1 }}>
              There are 2 additional accounts available for you to connect with
              bunkr
            </BKText>
          </View>
          <BKButton
            btnText="Connect another bank"
            btnBg={colors.brandblue}
            onpress={() => navigation.navigate("Accountinfo")}
          />
        </View>

        <Listheaders headerTitle="CONNECTED ACCOUNTS (2)" />
      </>
    );
  };

  return (
    <TabWrapper pH={0}>
      <>
        <View style={{ paddingHorizontal: 24 }}>
          <Greetingsheader extraInfo="You are viewing your connected accounts" />
        </View>

        <FlatList 
        data={new Array(5)}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item}) => <BankAccountTags />}
        
        
        />

        
      </>
    </TabWrapper>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
