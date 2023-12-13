import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AppWrapper,
  EmptyState,
  Listheaders,
  OnScreenAlert,
  ScheduleTransfer,
} from "../components";
import { ACTIVE_SCHEDULE, INACTIVE_SCHEDULE } from "../datas";


const ScheduleTransferScreen = () => {

    const alertMessage = ACTIVE_SCHEDULE.length == 0 ? "Hey there, You have not scheduled any transfers. Click the button below to get started" : ""



  const ListHeader = () => {
    return (
      <>
        <OnScreenAlert
          alertMsg={alertMessage}
          alertAction=""
          btnText="Connect another bank"
        />
        <Listheaders headerTitle="ACTIVE SCHEDULES" mB={24} />

        <FlatList
          data={ACTIVE_SCHEDULE}

          ListEmptyComponent={() => (
            <EmptyState
              pV={30}
              emptyMsg="There are no data to show at this time"
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 12}} />}

          renderItem={({item}) => <ScheduleTransfer item={item} />}
        />
        <Listheaders headerTitle="INACTIVE SCHEDULES" mB={24} mT={24} />
      </>
    );
  };
  return (
    <AppWrapper pageTitle="Schedule Transfer" pH={0}>
      <>
        <FlatList
          data={INACTIVE_SCHEDULE}
          ListHeaderComponent={ListHeader}
          ItemSeparatorComponent={() => <View style={{height: 12}} />}
          ListEmptyComponent={() => (
            <EmptyState emptyMsg="There are no data to show at this time" />
          )}
          renderItem={({item}) => <ScheduleTransfer item={item} />}
        />
      </>
    </AppWrapper>
  );
};

export default ScheduleTransferScreen;

const styles = StyleSheet.create({});
