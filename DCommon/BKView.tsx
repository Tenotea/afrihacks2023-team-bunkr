import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type DCBoxProps = {
  ui?: ViewStyle;
  row?: boolean;
  Sbetween?: boolean;
  centered?: boolean;
} & React.ComponentProps<typeof View>;

const BKView = ({
  ui,
  row = false,
  Sbetween = false,
  centered = false,
  ...rest
}: DCBoxProps) => {
  return (
    <View
      style={[
        {
          justifyContent: Sbetween ? "space-between" : "center",
          alignItems: centered ? "center" : "flex-start",
          flexDirection: row ? "row" : "column",
        },
        ui,
      ]}
      {...rest}
    />
  );
};

export default BKView;

const styles = StyleSheet.create({});
