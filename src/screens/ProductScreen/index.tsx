import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string>(product.options?.[0])
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <View>
            <Text style={styles.title}>{product.title}</Text>
            {/* image carousel */}

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
                from ${product.price}
                {product.oldPrice && <Text style={styles.oldPrice}> ${product.oldPrice}</Text>}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text='Add to cart' onPress={() => console.warn('add to cart')} />
            <Button text='Buy now' onPress={() => console.warn('buy now!')} />
        </View>
    )
}

export default ProductScreen