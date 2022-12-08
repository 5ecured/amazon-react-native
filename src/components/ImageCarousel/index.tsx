import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState, useCallback } from 'react'

interface CarouselProps {
    images: string[]
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const windowWidth = useWindowDimensions().width

    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
    }, [])

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, { width: windowWidth - 40 }]}
                        source={{ uri: item }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment='center'
                decelerationRate='fast'
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50
                }}
                onViewableItemsChanged={onFlatlistUpdate}

            />

            <View style={styles.dots}>
                {images.map((_, i) => (
                    <View
                        style={
                            [styles.dot, {
                                backgroundColor: i === activeIndex ? '#c9c9c9' : '#ededed'
                            }]
                        }
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5
    },
})

export default ImageCarousel