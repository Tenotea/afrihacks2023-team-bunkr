import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type LogoProps = {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}

const BKLogo = ({ marginTop=0,marginBottom=0, marginLeft=0, marginRight=0 }: LogoProps) => {
  return (
    <View style={[styles.logo, {marginTop, marginBottom, marginLeft, marginRight}]}>
        <Text style={styles.mainColor}>
            <Text style={styles.blueColor}>bunkr.</Text>finance
        </Text>
    </View>
  )
}

export default BKLogo

const styles = StyleSheet.create({
    logo: {
        
    }, 
    mainColor: {
        fontSize: 18,
        fontWeight: '900',
        color: "white"
    }, 
    blueColor: {
        color: "#0029FF"
    }
})