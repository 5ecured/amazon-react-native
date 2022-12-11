import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import AddressScreen from '../screens/AddressScreen'

const Stack = createStackNavigator()

const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={ShoppingCartScreen} name='Cart' options={{ title: 'Shopping Cart' }} />
            <Stack.Screen component={AddressScreen} name='Address' />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack