import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import BKText from "./BKText";
import { colors } from "../themes";
import { Dropdownbankicon, Dropdownicon } from "../assets/icons";
import BKView from "./BKView";

type inputProps = {
  label: string;
  placeholderText?: string;
  mT?: number;
  mB?: number;
  control: any;
  name: string;
  rules?: any;
  type?: "input" | "dropdown" | "password";
  onPress?: () => void;
  rightComponent?: any;
  editable?: boolean;
  textInputProps?: TextInputProps;
};

const BKInput = ({
  label,
  placeholderText,
  mT = 0,
  mB = 0,
  name,
  rules = {},
  type = "input",
  control,
  onPress,
  rightComponent,
  editable = true,
  textInputProps,
}: inputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  let togglePassword = () => {
    setShowPassword((s) => !s);
  };

  const renderInputType = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View
        style={{
          marginTop: mT,
          marginBottom: mB,
        }}
      >
        <BKText size={12}>{label}</BKText>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={{}}>
              <TextInput
                {...textInputProps}
                style={styles.textInputStyle}
                onChangeText={onChange}
                editable={editable}
                onBlur={(e) => setIsFocused(false)}
                onFocus={(e) => setIsFocused(true)}
                value={value}
                placeholder={placeholderText}
                placeholderTextColor="#313442"
              />
              {error && (
                <BKText italized size={12} color={colors.red10}>
                  {error?.message}
                </BKText>
              )}
            </View>
          )}
        />
      </View>
    );
  };

  const renderPasswordType = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View
        style={{
          marginTop: mT,
          marginBottom: mB,
          borderColor: "red",
        }}
      >
        <Text style={{}}>{label}</Text>

        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={{ marginBottom: 20 }}>
              <View style={{}}>
                <TextInput
                  onChangeText={onChange}
                  editable
                  onBlur={onBlur}
                  returnKeyType="done"
                  value={value}
                  placeholderTextColor="red"
                  style={{}}
                  secureTextEntry={showPassword}
                />
                <Pressable hitSlop={30} onPress={togglePassword} style={{}}>
                  {/* {!showPassword ? <Eyeopenicon /> : <Eyecrossed />} */}
                </Pressable>
              </View>
              {error && <Text style={{}}> {error.message}</Text>}
            </View>
          )}
        />
      </View>
    );
  };

  const renderDropdownType = () => {
    return (
      <View
        style={[
          {
            marginTop: mT,
            marginBottom: mB,
          },
        ]}
      >
        <BKText size={12}>{label}</BKText>
        <Pressable
          onPress={onPress}
          style={[styles.textInputStyle, { justifyContent: "center" }]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 22,
              }}
            >
              <Dropdownbankicon />
              <BKText color="#313442">{placeholderText}</BKText>
            </View>
            <Dropdownicon />
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <>
      {type === "dropdown" && renderDropdownType()}
      {type === "input" && renderInputType()}
      {type === "password" && renderPasswordType()}
    </>
  );
};

export default BKInput;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: "#15171D",
    paddingHorizontal: 18,
    borderRadius: 5,
    backgroundColor: "#0F1014",
    marginTop: 5,
  },
});
