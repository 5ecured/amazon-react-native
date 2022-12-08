import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import Button from '../../components/Button'

const AddressScreen = () => {
    const [country, setCountry] = useState<string>('Singapore')
    const [fullname, setFullname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [addressError, setAddressError] = useState('')
    const [city, setCity] = useState<string>('')

    const onCheckout = () => {
        if (!!addressError) {
            Alert.alert('Fix all errors before submitting')
            return
        }
        if (!fullname) {
            Alert.alert('Please fill in the full name')
            return
        }

        console.warn('success checkout')
    }

    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short')
        }
    }

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry} >
                    <Picker.Item value='Singapore' label='Singapore' />
                    <Picker.Item value='Indonesia' label='Indonesia' />
                    <Picker.Item value='Japan' label='Japan' />
                    <Picker.Item value='Australia' label='Australia' />
                    <Picker.Item value='Italy' label='Italy' />
                </Picker>
            </View>

            {/* Full name */}
            <View style={styles.row}>
                <Text style={styles.label}>Full name (First and Last name)</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Full name'
                    value={fullname}
                    onChangeText={setFullname}
                />
            </View>

            {/* Phone number */}
            <View style={styles.row}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Phone number'
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            {/* Address */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Address'
                    value={address}
                    onEndEditing={validateAddress}
                    onChangeText={text => {
                        setAddress(text)
                        setAddressError('')
                    }}
                />
                {addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
            </View>

            {/* City */}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    placeholder='City'
                    value={city}
                    onChangeText={setCity}
                />
            </View>

            <Button text='Checkout' onPress={onCheckout} />
        </View>
    )
}

export default AddressScreen