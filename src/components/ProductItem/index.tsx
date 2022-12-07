import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

interface ProductItemProps {
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

const ProductItem: React.FC<ProductItemProps> = ({ item: { id, title, image, avgRating, ratings, price, oldPrice } }) => {

    return (
        <View style={styles.root}>
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
    )
}

export default ProductItem