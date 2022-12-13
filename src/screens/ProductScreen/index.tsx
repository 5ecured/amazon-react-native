import { Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
// import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import { useRoute } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Product } from '../../models';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [quantity, setQuantity] = useState<number>(1)
    const [product, setProduct] = useState<Product | undefined>(undefined)

    const route = useRoute()

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

            <Button text='Add to cart' onPress={() => console.warn('add to cart')} />
            <Button text='Buy now' onPress={() => console.warn('buy now!')} />
        </ScrollView>
    )
}

export default ProductScreen