import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BKInput } from '../DCommon';
import { useForm } from 'react-hook-form';

const inputDashIcon = require('../assets/icons/InputDashIcon.svg');


const InputGroup = () => {
    const { control, handleSubmit } = useForm({ mode: "all" })
    return (
        <View style={styles.inputContainer}>
            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />

            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />

            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />

            <View>
                <Image source={inputDashIcon} style={{ borderColor: "red" }}/>
            </View>

            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />

            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />

            <BKInput 
                control={control}
                label=''
                name=''
                placeholderText='0'
            />
        </View>
    )
}

export default InputGroup

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: "lightgrey",
        marginTop: 43,
        justifyContent: "space-between",
    }
})