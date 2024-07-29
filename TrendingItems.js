import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function TrendingItems({trendsData}) {
    const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            marginBottom:10,
        },
        ele:{
            width:'auto',
            height:40,
            marginRight:10,
            padding:10,
            backgroundColor:'white',
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'space-evenly',
            borderRadius:5,
            elevation: 1,
        },
        image:{
            width:20,
            height:20,
            marginRight:5,
        }
    })

    return (
        <View style={styles.container}>
            {trendsData.map((i, index)=>{
            return(
                <View key={index} style={styles.ele}>
                    <Image source={{uri:i.image}} style={styles.image}></Image>
                    <Text>{i.text}</Text>
                </View>
            )
            })}
        </View>
    );

    
}

export default TrendingItems;