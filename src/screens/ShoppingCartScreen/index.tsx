import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const ShoppingCartScreen = () => {
    const totalPrice = products.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0)

    const navigation = useNavigation()

    const onCheckout = () => {
        navigation.navigate('Address' as never)
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>Subtotal ({products.length} items):{' '}
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