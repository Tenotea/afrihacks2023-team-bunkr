import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import {
    SafeAreaView,
    useSafeAreaInsets,
  } from "react-native-safe-area-context";

type Props = {
    children: React.ReactElement;
}

const ScrollableWrapper = ({ children }: Props) => {
    const insets = useSafeAreaInsets();
  return (
    <View
        style={{
            flex: 1,
            // paddingTop: top ? insets.top : 0,
            backgroundColor: "#08090D",
            // paddingBottom: bottom ? insets.bottom : 0,
        }}
    >
        <ScrollView>
            <StatusBar animated={true} barStyle="light-content"/>
            {children}
        </ScrollView>
    </View>
  )
}

export default ScrollableWrapper

const styles = StyleSheet.create({})