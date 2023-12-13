import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BKText } from '../DCommon'
const EmptyState = ({emptyMsg, pV=70}: {emptyMsg: string, pV?: number}) => {
  return (
    <View style={{paddingVertical: pV, alignItems: "center"}}>
      <BKText color='#7E84A5'>{emptyMsg}</BKText>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})