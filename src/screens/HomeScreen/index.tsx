import { View, StyleSheet } from 'react-native'
import React from 'react'
import ProductItem from '../../components/ProductItem'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default HomeScreen