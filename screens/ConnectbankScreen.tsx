import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { PageWrapper, PageheaderSubheader } from "../components";
import { Accessbanklogoicon } from "../assets/icons";
import { BKButton, BKText } from "../DCommon";
import { BVN_LINK_ACCOUNT } from "../datas";
import { colors } from "../themes";

type BankOptionProps = {
  currentIndex: number;
  active: number;
  setActive: (index: number) => void;
  data: {
    bankName: string;
    acctNumber: string;
  };
};

const BankOption = ({
  currentIndex,
  active,
  setActive,
  data,
}: BankOptionProps) => {
  let selected = active == currentIndex;
  const { bankName, acctNumber } = data;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setActive(currentIndex)}
      style={[
        styles.bankOptionWrap,
        {
          backgroundColor: selected ? "rgba(91, 255, 108, 0.05)" : "#0F1014",
          borderColor: selected ? "#5BFF6C" : "#15171D",
        },
      ]}
    >
      <Accessbanklogoicon />
      <View style={{ gap: 4 }}>
        <BKText size={12} weight="medium">
          {bankName}
        </BKText>
        <BKText size={10} color="#343749" weight="medium">
          {acctNumber}
        </BKText>
      </View>
    </TouchableOpacity>
  );
};

const ConnectbankScreen = ({navigation}) => {
  const [active, setActive] = useState(null);

  return (
    <PageWrapper scroll={false}>
      <>
        <ScrollView style={{ flex: 1 }}>
          <PageheaderSubheader
            headerText="Connect your bank"
            subHeaderText="We found the following banks associated with your BVN. Select one to get started"
          />

          <FlatList
            data={BVN_LINK_ACCOUNT}
            scrollEnabled={false}
            contentContainerStyle={{ paddingTop: 60 }}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            renderItem={({ item, index }) => (
              <BankOption
                data={item}
                currentIndex={index}
                active={active}
                setActive={setActive}
              />
            )}
          />
        </ScrollView>
        <BKButton
          btnText="Connect my bank"
          onpress={active ? () => navigation.navigate("Connectsuccess") : () => console.log('Dey play my fans')}
          btnBg={!active ? "#1F2232" : colors.brandblue}
        />
      </>
    </PageWrapper>
  );
};

export default ConnectbankScreen;

const styles = StyleSheet.create({
  bankOptionWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,

    borderRadius: 5,
    borderWidth: 1,
  },
});
