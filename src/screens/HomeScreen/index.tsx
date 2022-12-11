import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../../components/ProductItem'
import products from '../../data/products'

interface HomeScreenProps {
    searchValue: string
}

const HomeScreen: React.FC<HomeScreenProps> = ({ searchValue }) => {
    console.warn(searchValue)
    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default HomeScreen