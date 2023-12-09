import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageWrapper } from '../components'


const SettingsScreen = () => {
  return (
    <PageWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </PageWrapper>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})