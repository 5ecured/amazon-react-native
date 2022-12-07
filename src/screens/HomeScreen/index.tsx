import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    page: {
        padding: 10
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    star: {
        margin: 2
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
})

export default HomeScreen