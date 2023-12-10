import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabWrapper } from '../components'

const AccountScreen = () => {
  return (
    <TabWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </TabWrapper>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})