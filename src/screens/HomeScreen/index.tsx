import { View, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from '../../components/ProductItem'
// import products from '../../data/products'
import { DataStore } from '@aws-amplify/datastore'
import { Product } from '../../models';

interface HomeScreenProps {
    searchValue: string
}

const HomeScreen: React.FC<HomeScreenProps> = ({ searchValue }) => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await DataStore.query(Product)
            setProducts(results)
        }
        fetchProducts()
    }, [])

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