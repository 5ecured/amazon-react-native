import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const ProductItem = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg' }} />

            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
                <View style={styles.ratingsContainer}>
                    <FontAwesome style={styles.star} name='star' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star-half-full' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star-o' size={18} color={'#e47911'} />

                    <Text>13,032</Text>
                </View>
                <Text style={styles.price}>
                    from $13.95
                    <Text style={styles.oldPrice}> $16.22</Text>
                </Text>
            </View>
        </View>
    )
}

export default ProductItem