import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

function SlidesItems({dataresdata}) {
    

    return (
        <View style={styles.container}>
            {dataresdata.map((i, index) => {
                return(
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{uri:i.i}} style={styles.image}></Image>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageContainer: {
        marginHorizontal: 10,
    },
    image: {
        width: 330,
        height: 100,
        borderRadius:7,
    },
});

export default SlidesItems;