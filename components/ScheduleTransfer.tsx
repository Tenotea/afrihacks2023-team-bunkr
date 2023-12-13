import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BKText, BKView } from "../DCommon";
import { Scheduletransfericon } from "../assets/icons";

type ScheduleProps = {
  item: {
    scheduleTitle: string;
    nextCallDate: string;
    numberOfExecuted: string;
    numberLeft: string;
    active: boolean;
  };
};

const ScheduleTransfer = ({ item }: ScheduleProps) => {
  const { scheduleTitle, nextCallDate, numberOfExecuted, numberLeft, active } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 18,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 20,
        paddingBottom: 14,
        paddingTop: 12,
        backgroundColor: "#0F1014",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#15171D",
        alignItems: active ? "flex-start" : "center",
      }}
    >
      <BKView
        centered
        ui={{
          width: 35,
          height: 35,
          backgroundColor: active ? "#11201A" : "#1F2232",
          borderRadius: 35 / 2,
        }}
      >
        <Scheduletransfericon active={active} />
      </BKView>

      <View style={{ flex: 1, rowGap: 12 }}>
        <View style={{}}>
          <BKText size={12} weight="extrabold">
            {scheduleTitle}
          </BKText>
          {active ? (
            <BKView row Sbetween ui={{ marginTop: 4 }}>
              <BKText size={10} weight="medium" color="#7E84A5">
                {numberOfExecuted} Executed, {numberLeft} Left
              </BKText>
              <BKText size={10} weight="medium" color="#7E84A5">
                {nextCallDate}
              </BKText>
            </BKView>
          ) : (
            <BKText
              size={10}
              ui={{ marginTop: 4 }}
              weight="medium"
              color="#7E84A5"
            >
              Cycle completed
            </BKText>
          )}
        </View>

        {active && (
          <BKText size={10} weight="medium" color="#343749" ui={{ flex: 1 }}>
            Transfers 10% of credit from John Amusan to Alowonle A. Tijani every
            month on the 26th
          </BKText>
        )}
      </View>
    </View>
  );
};

export default ScheduleTransfer;

const styles = StyleSheet.create({});
