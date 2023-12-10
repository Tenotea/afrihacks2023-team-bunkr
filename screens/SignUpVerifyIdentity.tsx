import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollableWrapper } from '../components'
import BKLogo from '../DCommon/BKLogo'
import { BKButton, BKText } from '../DCommon';
import { useNavigation } from '@react-navigation/native';

const VerificationImg = require('../assets/verificationImage.png');

const SignUpVerifyIdentity = () => {
  const navigation = useNavigation();

  const goToAllSetScreen = () => {
    // @ts-ignore
    navigation.navigate('AllSetScreen')
  }
  return (
    <ScrollableWrapper>
        <View style={styles.verifyIdentityContainer}>
          <BKLogo 
            marginTop={88}
            marginBottom={113}
          />

          <View style={styles.main}>
            <BKText 
              children={"Verify your identity"}
              size={27}
              weight='bold'
            />
            <Image 
              source={VerificationImg}
              style={[styles.image, {
                width: 361, // this will backfire on other screen sizes
                height: 369,
              }]}
              
            />
          </View>

          <BKButton 
            btnText="Verify my identity"
            onpress={goToAllSetScreen}
            marginTop={157}
            marginBottom={54}
          />
        </View>
    </ScrollableWrapper>
  )
}

export default SignUpVerifyIdentity

const styles = StyleSheet.create({
  verifyIdentityContainer: {
    flex: 1,
    paddingHorizontal: 35
  }, 
  main: {
    alignItems: "center"
  }, 
  image: {
    marginTop: 40,
    // paddingHorizontal: 35
  }
})