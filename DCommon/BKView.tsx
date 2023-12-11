import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type DCBoxProps = {
  ui?: ViewStyle;
  row?: boolean;
  Sbetween?: boolean;
  centered?: boolean;
  end?: boolean;
} & React.ComponentProps<typeof View>;

const BKView = ({
  ui,
  row = false,
  Sbetween = false,
  centered = false,
  end = false,
  ...rest
}: DCBoxProps) => {
  return (
    <View
      style={[
        {
          justifyContent: Sbetween
            ? "space-between"
            : centered
            ? "center"
            : "flex-start",
          alignItems: centered ? "center" : end ? "flex-end" : "flex-start",
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
