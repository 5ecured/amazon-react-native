import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import QuantitySelector from '../QuantitySelector'

interface CartProductItemProps {
    cartItem: {
        id: string
        quantity: number
        option?: string
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            ratings: number,
            price: number,
            oldPrice?: number
        }
    }
}

const CartProductItem: React.FC<CartProductItemProps> = ({ cartItem }) => {
    const { quantity: quantityProp, item, id } = cartItem
    const { image, title, avgRating, ratings, oldPrice, price } = item
    const [quantity, setQuantity] = useState<number>(quantityProp)

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: image }} />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{title}</Text>
                    <View style={styles.ratingsContainer}>
                        {[0, 0, 0, 0, 0].map((_, i) => (
                            <FontAwesome
                                key={`${id}-${i}`}
                                style={styles.star}
                                name={i < Math.floor(avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'}
                            />
                        ))}

                        <Text>{ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${price}
                        {oldPrice && <Text style={styles.oldPrice}> ${oldPrice}</Text>}
                    </Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
        </View>
    )
}

export default CartProductItem