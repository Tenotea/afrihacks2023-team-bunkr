import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AmountValue,
  AppWrapper,
  IconwithTitle,
  Listheaders,
  SearchInput,
} from "../components";
import { B2bicon } from "../assets/icons";

const ServicesScreen = ({ navigation }) => {
  const services = [
    {
      title: "TRANSFERS",
      datas: [
        {
          title: "Bunkr to Bank Transfer",
          action: "Bunk2banktransfer",
        },
        {
          title: "Bunkr to Bunkr Transfer",
          action: "B2btransfer",
        },
        {
          title: "Schedule Transfer",
          action: "Scheduletransfer",
        },
      ],
    },
    {
      title: "PAY BILLS",
      datas: [
        {
          title: "Buy Airtime",
        },
        {
          title: "Buy Data",
        },
        {
          title: "Electricity",
        },
        {
          title: "Cable Tv",
        },
      ],
    },

    {
      title: "ACCOUNTs",
      datas: [
        {
          title: "Beneficiaries",
        },
        {
          title: "Generate statement",
        },
        {
          title: "Payment Links",
        },
        {
          title: "Invoices",
        },
      ],
    },
    {
      title: "OTHERS",
      datas: [
        {
          title: "Gift Cards",
        },
        {
          title: "Hotels",
        },
        {
          title: "Travel",
        },
        {
          title: "Games",
        },
        {
          title: "Education",
        },
      ],
    },
  ];

  return (
    <AppWrapper pageTitle="Services" pH={0}>
      <ScrollView>
        <View style={{ paddingHorizontal: 25, paddingBottom: 32 }}>
          <SearchInput />
        </View>

        {services.map((service) => {
          return (
            <>
              <Listheaders headerTitle={service.title} />
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {service.datas.map((data, index) => {
                  return (
                    <IconwithTitle
                      key={index.toString() + data.title}
                      action={data.action}
                      Icon={B2bicon}
                      title={data.title}
                    />
                  );
                })}
              </View>
            </>
          );
        })}
      </ScrollView>
    </AppWrapper>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
