/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet, View, Text, Pressable } from "react-native";

import {
  AccountScreen,
  AccountinfoScreen,
  AnalyticsScreen,
  B2btransferScreen,
  BunktobanktransferScreen,
  DashboardScreen,
  HistoryScreen,
  HomeScreen,
  ServicesScreen,
  SettingsScreen,
  SignUpAllSetScreen,
  SignUpTwoScreen,
  SignUpVerifyEmailScreen,
  SignUpVerifyIdentityScreen,
  SignUpVerifyNumberScreen,
  SignupScreen,
} from "../screens";

import {
  Accounttabicon,
  Analyticstabicon,
  Historyicon,
  Hometabicon,
  Settingsicon,
} from "../assets/icons";
import { useInsets } from "../hooks";

const AuthStack = createStackNavigator();
const DashboardTabs = createBottomTabNavigator();

let TabIcon = (name: string, focused: boolean) => {
  switch (name) {
    case "Home":
      return <Hometabicon focused={focused} />;
    case "Analytics":
      return <Analyticstabicon focused={focused} />;
    case "Accounts":
      return <Accounttabicon focused={focused} />;
    case "History":
      return <Historyicon focused={focused} />;
    case "Settings":
      return <Settingsicon focused={focused} />;
    default:
      break;
  }
};

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { deviceWidth, bottom } = useInsets();
  return (
    <View style={[styles.customTabBarWrapper, { width: deviceWidth }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            hitSlop={10}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                rowGap: 2,
              }}
            >
              <View>{TabIcon(route.name, isFocused)}</View>
              <Text
                style={{
                  color: isFocused ? "#5BFF6C" : "#8B92B6",
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const NoAuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      initialRouteName="Signup"
    >
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="ScreenTwo" component={SignUpTwoScreen} />
      <AuthStack.Screen
        name="VerifyNumberScreen"
        component={SignUpVerifyNumberScreen}
      />
      <AuthStack.Screen
        name="VerifyEmailScreen"
        component={SignUpVerifyEmailScreen}
      />
      <AuthStack.Screen
        name="VerifyIdentityScreen"
        component={SignUpVerifyIdentityScreen}
      />
      <AuthStack.Screen name="AllSetScreen" component={SignUpAllSetScreen} />
    </AuthStack.Navigator>
  );
};

const DashboardTabNavigator = () => {
  return (
    <DashboardTabs.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => TabIcon(route.name, focused),
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      })}
      initialRouteName="Home"
    >
      <DashboardTabs.Screen name="Home" component={HomeScreen} />
      <DashboardTabs.Screen name="Analytics" component={AnalyticsScreen} />
      <DashboardTabs.Screen name="Accounts" component={AccountScreen} />
      <DashboardTabs.Screen name="History" component={HistoryScreen} />
      <DashboardTabs.Screen name="Settings" component={SettingsScreen} />
    </DashboardTabs.Navigator>
  );
};

const AuthenticatedNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard"
    >
      <AuthStack.Screen name="Dashboard" component={DashboardTabNavigator} />
      <AuthStack.Screen name="Transfer" component={B2btransferScreen} />
      <AuthStack.Screen name="Services" component={ServicesScreen} />
      <AuthStack.Screen name="B2btransfer" component={B2btransferScreen} />
      <AuthStack.Screen
        name="Bunk2banktransfer"
        component={BunktobanktransferScreen}
      />
            <AuthStack.Screen
        name="Accountinfo"
        component={AccountinfoScreen}
      />
    </AuthStack.Navigator>
  );
};

export const NavigatorSelector = () => {
  const token = true;

  return !token ? <NoAuthNavigator /> : <AuthenticatedNavigator />;
};

const styles = StyleSheet.create({
  customTabBarWrapper: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#08090D",
    justifyContent: "space-around",
    height: 80,
    bottom: 0,
  },
});
