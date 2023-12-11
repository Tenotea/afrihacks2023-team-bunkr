import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BankCards,
  DashboardActions,
  Eachtransaction,
  Greetingsheader,
  Networth,
  TabWrapper,
} from "../components";
import { BKText, BKView } from "../DCommon";
import { colors } from "../themes";
import { BANK_CARDS, RECENT_TRANSACTIONS } from "../datas";

const HomeScreen = () => {




  const LinkedCards = () => {
    return (
      <FlatList
        data={BANK_CARDS}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 14 }}
        snapToAlignment="center"
        pagingEnabled
        renderItem={BankCards}
      />
    );
  };

  const ListHeader = () => {
    return (
      <>
        <Networth />
        <LinkedCards />
        <View style={{ paddingHorizontal: 14 }}>
          <DashboardActions />
          <BKText
            size={10}
            color={colors.blue15}
            weight="medium"
            ui={{ marginBottom: 12 }}
          >
            RECENT TRANSACTIONS
          </BKText>
        </View>
      </>
    );
  };

  return (
    <TabWrapper pH={0}>
      <>
        <View style={{ paddingHorizontal: 24 }}>
          <Greetingsheader />
        </View>
        <FlatList
          data={RECENT_TRANSACTIONS}
          ListHeaderComponent={ListHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({item}) => {
            return (
              <Eachtransaction datas={item} mH={14} />
            )
          } }
        />
      </>
    </TabWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});