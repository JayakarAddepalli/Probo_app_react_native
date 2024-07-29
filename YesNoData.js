import React, { useState } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, Modal, Pressable } from 'react-native';

function YesNoData(props) {
    
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            // paddingTop: StatusBar.currentHeight || 0,
            paddingTop:15,
            paddingLeft:15,
          },
        list: {
        //   marginHorizontal: 20,
          borderRadius:10,
          height:'auto',
          marginBottom:10,
          width:330, 
          height:185, 
          backgroundColor:'white',
          borderStyle:'solid', 
          borderRadius:5, 
          padding:20,
          elevation: 1,
        },
        text: {
          fontSize: 42,
        },
        btn:{
            width:100,
            backgroundColor:'white',
            color:'blue'
        },
        btn2:{
            width:100,
            backgroundColor:'white',
            color:'red'
        },
        headdiv:{
            flexDirection:'row',
            justifyContent:'space-between'
        },
        button:{
            elevation: 1,
        },
        buttonOpen1:{
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#f4f8ff',
        },
        buttonOpen2:{
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#fff4f4',
        },
        buttonClose:{
            borderRadius: 30,
            padding: 20,
            width:'80%',
            height:60,
            textAlign:'center',
            alignItems:'center',
            backgroundColor: 'blue',
        },
        buttonClose2:{
            borderRadius: 20,
            padding: 9,
            width:'45%',
            height:40,
            textAlign:'center',
            alignItems:'center',
            backgroundColor: 'white',
        },
        textStyle: {
            width:120,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            elevation: 1,
          },

          textStyle2: {
            width:60,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          },
        no:{
            color: 'red',
          },
          yes:{
            color: 'blue',
          },
          centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '90%',
            height:'50%',
            borderRadius:30,
            backgroundColor:'white',
          },
          modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 5,
            width:'100%',
            padding: 25,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          },
          items:{
            justifyContent:'space-evenly',
            alignItems:'center',
            flexDirection:'row'
          },
          mid:{
            width:'90%',
            height:'50%',
            padding:10,
            marginTop:20,
            backgroundColor:'white',
            borderRadius:10,
            borderStyle:'dashed',
            borderWidth:1,
          },
          prize:{
            width:'100%',
            height:'25%',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            padding:10,
            marginBottom:10
          },
          prize2:{
            width:'100%',
            height:'10%',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            paddingLeft:10,
            paddingRight:10,
          },
          firstbtn:{
            backgroundColor:'blue',
            color:'white'
          },
          secbtn:{
            backgroundColor:'#ff8000',
            color:'white'
          },
          minmax:{
            width:40,
            height:40,
            backgroundColor:'grey',
            borderRadius:5
          },
          te:{
            fontSize:30,
            textAlign:'center'
          },
          contfinal:{width:'60%', height:'50%', borderRadius:5, justifyContent:'center', alignContent:'center', flexDirection:'row'},
          continner:{width:'10%', height:'100%', backgroundColor:'black', borderRadius:20, position:'absolute', right:'35%', top:'-25%', zIndex:2},
          contdiinner:{width:'100%', height:'50%', backgroundColor:'gray', borderRadius:5, justifyContent:'center', alignContent:'center', flexDirection:'row'},
          contindi1:{width:'60%', height:'100%', backgroundColor:'black', borderRadius:5, },
          contindi2:{width:'40%', height:'100%', backgroundColor:'gray', borderRadius:5, },
      });

    const [dataClick, setClick] = useState(false)

    const data = props.YesNo.map((i, index)=>{
        return(
            <View key={index} style={styles.list}>
                <Text>{i.icon} traders</Text>
                <View style={styles.headdiv}>
                    <Text style={{fontSize:14, fontWeight:'bold'}}>{i.head}</Text>
                    <Image source={{uri:i.image}} style={{width:30, height:30}}></Image>
                </View>
                <Text numberOfLines={2}>{i.par}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:10}}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen1]}
                        onPress={() => setClick(true)}>
                        <Text style={[styles.textStyle, styles.yes]}>Yes 7.0</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonOpen2]}
                        onPress={() => setClick(true)}>
                        <Text style={[styles.textStyle, styles.no]}>No 3.0</Text>
                    </Pressable>
                </View>
            </View>
            
        )
    })

    

    return (
            <View>
                <Modal animationType='slide' transparent={true} onRequestClose = {()=>setClick(false)} visible={dataClick}> 
                    <View style={styles.centeredView}>
                        <Text style={{margin:15, textAlign:'left', fontSize:16, width:'88%', }}>Kolkata to win the match vs Mumbai</Text>
                        <View style={styles.items}>
                            <Pressable
                                    style={[styles.button, styles.buttonClose2, styles.firstbtn]}
                                    onPress={() => console.log(true)}>
                                    <Text style={styles.textStyle2}>Yes 7.0</Text>
                            </Pressable>
                            <Pressable
                                    style={[styles.button, styles.buttonClose2, styles.secbtn]}
                                    onPress={() => console.log(true)}>
                                    <Text style={styles.textStyle2}>No 3.0</Text>
                            </Pressable>
                        </View>
                        <View style={styles.mid}>
                            <View style={styles.prize}>
                                <Text style={{fontWeight:'bold', fontSize:15}}>Price</Text>
                                <Text style={{fontWeight:'bold', fontSize:15}}>Rs 9.9</Text>
                            </View>
                            <View style={styles.prize}>
                                <Pressable style={styles.minmax}><Text style={styles.te}>-</Text></Pressable>
                                <View style={styles.contfinal}>
                                    <View style={styles.continner}></View>
                                    <View style={styles.contdiinner}>
                                        <View style={styles.contindi1}></View>
                                        <View style={styles.contindi2}></View>
                                    </View>
                                </View>
                                <Pressable style={styles.minmax}><Text style={styles.te}>+</Text></Pressable>
                            </View>
                            <View style={styles.prize2}>
                                <Text style={{fontSize:15}}>Rs 9.9</Text>
                                <Text style={{fontSize:15, color:'green'}}>Rs 10</Text>
                            </View>
                            <View style={styles.prize2}>
                                <Text style={{fontSize:15}}>You put</Text>
                                <Text style={{fontSize:15}}>You get</Text>
                            </View>
                        </View>
                        <View style={styles.modalView}> 
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setClick(false)}>
                                <Text style={styles.textStyle}>Swipe for Yes</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal> 
                <FlatList style={styles.container} data={props.YesNo} renderItem={()=> data} keyExtractor={(key, index)=>index.toString()}>
                       
                </FlatList>
                
            </View>
        
    );
}

export default YesNoData;