import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CartProductItem from '../../components/CartProductItem'
// import products from '../../data/cart'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Auth } from 'aws-amplify'
import { Product, CartProduct } from '../../models';
import products from '../../data/products'


const ShoppingCartScreen = () => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchCartProducts = async () => {
            // TODO query only my cart items
            const result = await DataStore.query(CartProduct)
            setCartProducts(result)
        }
        fetchCartProducts()
    }, [])



    useEffect(() => {
        if (cartProducts.filter(cp => !cp.product).length === 0) {
            return
        }

        const fetchProducts = async () => {
            const products = await Promise.all(cartProducts.map(cartProduct => DataStore.query(Product, cartProduct.productID)))

        }
        setCartProducts(currentCartProducts =>
            currentCartProducts.map(cartProduct => ({
                ...cartProduct,
                product: products.find(p => p.id === cartProduct.productID)
            }))
        )
        fetchProducts()
    }, [cartProducts])

    const totalPrice = 0

    // const totalPrice = cartProducts.reduce((summedPrice, product) => (
    //     summedPrice + product.item.price * product.quantity
    // ), 0)


    const onCheckout = () => {
        navigation.navigate('Address' as never)
    }

    if (cartProducts.filter(cp => !cp.product).length !== 0) {
        return <ActivityIndicator />
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={cartProducts}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>Subtotal ({cartProducts.length} items):{' '}
                            <Text style={{ color: '#e479aa', fontWeight: 'bold' }}>{totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button text='Proceed to checkout' onPress={onCheckout} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default ShoppingCartScreen