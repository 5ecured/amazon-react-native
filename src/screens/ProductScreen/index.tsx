import { Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
// import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import { useRoute, useNavigation } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Product, CartProduct } from '../../models';
import { Auth } from 'aws-amplify'


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined)
    const [quantity, setQuantity] = useState<number>(1)
    const [product, setProduct] = useState<Product | undefined>(undefined)

    const route = useRoute()
    const navigation = useNavigation()

    useEffect(() => {
        const fetchProduct = async () => {
            if (!route.params?.id) {
                return
            }
            const result = await DataStore.query(Product, route.params.id)
            setProduct(result)
        }
        fetchProduct()
    }, [route.params?.id])

    useEffect(() => {
        if (product?.options) {
            setSelectedOption(product.options[0])
        }
    }, [product])

    const onAddToCart = async () => {
        const userData = await Auth.currentAuthenticatedUser()

        if (!product || !userData) return

        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption,
            productID: product.id
        })

        await DataStore.save(newCartProduct)
        navigation.navigate('Cart' as never)
    }

    if (!product) {
        return <ActivityIndicator />
    }

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(el) => setSelectedOption(el)}
            >
                {
                    product.options.map(el => (
                        <Picker.Item label={el} value={el} />
                    ))
                }
            </Picker>

            <Text style={styles.price}>
                from ${product.price.toFixed(2)}
                {product.oldPrice && <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text='Add to cart' onPress={onAddToCart} />
            <Button text='Buy now' onPress={() => console.warn('buy now!')} />
        </ScrollView>
    )
}

export default ProductScreen