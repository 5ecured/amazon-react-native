import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'
import { SafeAreaView, Text, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const Stack = createStackNavigator()

interface HeaderProps {
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const HeaderComponent: React.FC<HeaderProps> = ({ searchValue, setSearchValue }) => (
    <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
        <View style={{ backgroundColor: 'white', margin: 10, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Feather name='search' size={20} />
            <TextInput
                style={{ height: 40, marginLeft: 10 }}
                placeholder='Search...'
                value={searchValue}
                onChangeText={setSearchValue}
            />
        </View>
    </SafeAreaView>
)

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
            }}
        >
            {/* If you want to pass props to a component inside Stack.Screen, do it like below - passing a function that
            returns a component */}
            <Stack.Screen name='HomeScreen'>
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            <Stack.Screen component={ProductScreen} name='ProductDetails' />
        </Stack.Navigator>
    )
}

export default HomeStack