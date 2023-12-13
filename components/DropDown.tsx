import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View>
      <Picker
        itemStyle={{color: "white"}}
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        mode='dropdown'
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: "white"
//   },
  picker: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default DropDown;