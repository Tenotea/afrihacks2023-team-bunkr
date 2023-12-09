import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageWrapper } from '../components'

const AccountScreen = () => {
  return (
    <PageWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Account Screen</Text>
      </View>
    </PageWrapper>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})