import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PageheaderSubheader, ScrollableWrapper } from '../components'
import BKLogo from '../DCommon/BKLogo';
import { BKButton } from '../DCommon';
import InputGroup from '../components/InputGroup';
import { useNavigation } from '@react-navigation/native';

const SignUpVerifyEmail = () => {
    const navigation = useNavigation()
    const goToSignUpVerifyIdentity = () => {
        // @ts-ignore
        navigation.navigate('VerifyIdentityScreen')
    }
 
    return (
    <ScrollableWrapper>
        <View style={styles.verifyNumberContainer}>
            <BKLogo 
                marginTop={88}
                marginBottom={467}
            />

            <PageheaderSubheader 
                headerText="Verify Your email address"
                subHeaderText="Enter the 6-Digit code that was sent to your email address"
            />

            <InputGroup />
           
            <BKButton 
                btnText="Verify my email"
                onpress={goToSignUpVerifyIdentity}
                marginBottom={54}
                marginTop={43}
            />
        </View>
    </ScrollableWrapper>
    )
}

export default SignUpVerifyEmail

const styles = StyleSheet.create({
    verifyNumberContainer: {
        flex: 1, 
        paddingHorizontal: 35
    }, 
  
})