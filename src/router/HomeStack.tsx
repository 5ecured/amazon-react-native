import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name='HomeScreen' />
            <Stack.Screen component={ProductScreen} name='ProductDetails' />
        </Stack.Navigator>
    )
}

export default HomeStack