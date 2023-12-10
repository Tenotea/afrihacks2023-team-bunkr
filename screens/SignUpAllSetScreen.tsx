import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageheaderSubheader, ScrollableWrapper } from '../components'
import BKLogo from '../DCommon/BKLogo'
import { BKButton } from '../DCommon';

const Confetti = require('../assets/confetti.png');

const SignUpAllSetScreen = () => {
  return (
    <ScrollableWrapper>
        <View style={styles.container}>
            <BKLogo 
                marginTop={88}
                marginBottom={400}
            />

            <View style={styles.main}>
                <Image source={Confetti} style={{
                    width: 128,
                    height: 128,
                    marginBottom: 28,
                }}/>

                <PageheaderSubheader 
                    headerText="You are all set"
                    subHeaderText="We have successfully verified your information. Let’s get you started on an hitch-free financial journey!"
                />
            </View>

            <BKButton 
                btnText="Let's Go!"
                onpress={() => console.log("Clicked 🚀")}
                marginTop={72}
                marginBottom={54}
            />
        </View>
    </ScrollableWrapper>
  )
}

export default SignUpAllSetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 35
    }, 
    main: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }
})