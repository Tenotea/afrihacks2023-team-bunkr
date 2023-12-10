import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PageheaderSubheader, ScrollableWrapper } from '../components'
import BKLogo from '../DCommon/BKLogo'
import { BKButton, BKInput, BKText } from '../DCommon'
import InputGroup from '../components/InputGroup';
import { useNavigation } from '@react-navigation/native'

const SignUpVerifyNumber = () => {
    const navigation = useNavigation();
    const goToVerifyEmailScreen = () => {
        // @ts-ignore
        navigation.navigate('VerifyEmailScreen')
    }
    return (
    <ScrollableWrapper>
        <View style={styles.verifyNumberContainer}>
            <BKLogo 
                marginTop={88}
                marginBottom={467}
            />

            <PageheaderSubheader 
                headerText="Verify Your phone number"
                subHeaderText="Enter the 6-Digit code that was sent to your phone number"
            />

            <InputGroup />
           
            <BKButton 
                btnText="Verify my phone number"
                onpress={goToVerifyEmailScreen}
                marginBottom={54}
                marginTop={43}
            />
        </View>
    </ScrollableWrapper>
    )
}

export default SignUpVerifyNumber

const styles = StyleSheet.create({
    verifyNumberContainer: {
        flex: 1, 
        paddingHorizontal: 35
    }, 
  
})