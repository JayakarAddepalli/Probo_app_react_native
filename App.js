import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import SlidesItems from './SlidesItems';
import YesNoData from './YesNoData';
import TrendingItems from './TrendingItems';
// import {  } from 'react-native-web';

export default function App() {
  const datares = [
    {'i':'https://image.freepik.com/free-vector/crypto-currency-banner_48369-12226.jpg'},
    {'i':'https://tse4.mm.bing.net/th?id=OIP.Uau2inkeK8chS8UU0lkFzwHaCF&pid=Api&P=0&h=180'},
    {'i':'https://tse4.mm.bing.net/th?id=OIP.Amj1aLFWK_Pi2lZotQaJiAHaCX&pid=Api&P=0&h=180'}
  ]

  const trends = [
    {'image':'https://cdn-icons-png.flaticon.com/128/5971/5971593.png', 'text':'SLvIND'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'BitCoin'},
    {'image':'https://cdn-icons-png.flaticon.com/128/10571/10571320.png', 'text':'Olympics'},
    {'image':'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', 'text':'Youtube'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'LNSvBPH'},
    {'image':'https://cdn-icons-png.flaticon.com/128/5971/5971593.png', 'text':'SLvIND'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'BitCoin'},
    {'image':'https://cdn-icons-png.flaticon.com/128/10571/10571320.png', 'text':'Olympics'},
    {'image':'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', 'text':'Youtube'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'LNSvBPH'},
    {'image':'https://cdn-icons-png.flaticon.com/128/5971/5971593.png', 'text':'SLvIND'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'BitCoin'},
    {'image':'https://cdn-icons-png.flaticon.com/128/10571/10571320.png', 'text':'Olympics'},
    {'image':'https://cdn-icons-png.flaticon.com/128/1384/1384060.png', 'text':'Youtube'},
    {'image':'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', 'text':'LNSvBPH'},
  ]

  const YesNo = [{'icon':Math.floor(100000 + Math.random() * 900000), 'head':'India to win he 2nd T20 vs Srilanka', 'image':'https://cdn-icons-png.flaticon.com/128/1031/1031373.png', 'par':'Thecentre has received another proposal to immediate constitue the elight pay commission to recieve the basic pay'},
    {'icon':Math.floor(100000 + Math.random() * 900000), 'head':'Max Verstappen win Belgian', 'image':'https://cdn-icons-png.flaticon.com/128/1055/1055666.png', 'par':'Thecentre has received another proposal to immediate constitue the elight pay commission to recieve the basic pay'},
    {'icon':Math.floor(100000 + Math.random() * 900000), 'head':'Centre to constitue', 'image':'https://cdn-icons-png.flaticon.com/128/732/732220.png', 'par':'Thecentre has received another proposal to immediate constitue the elight pay commission to recieve the basic pay'},
    {'icon':Math.floor(100000 + Math.random() * 900000), 'head':'India to win he 2nd T20 vs Srilanka', 'image':'https://cdn-icons-png.flaticon.com/128/732/732220.png', 'par':'Thecentre has received another proposal to immediate constitue the elight pay commission to recieve the basic pay'},
    {'icon':Math.floor(100000 + Math.random() * 900000), 'head':'Max Verstappen win Belgian', 'image':'https://cdn-icons-png.flaticon.com/128/2936/2936758.png', 'par':'Thecentre has received another proposal to immediate constitue the elight pay commission to recieve the basic pay'}
  ]

  const HomePort = [
    {image:'https://cdn-icons-png.flaticon.com/128/69/69524.png', text:'Home'},
    {image:'https://cdn-icons-png.flaticon.com/128/54/54481.png', text:'Search'},
    {image:'https://cdn-icons-png.flaticon.com/128/639/639394.png', text:'Portfolio'},
    {image:'https://cdn-icons-png.flaticon.com/128/3179/3179608.png', text:'Rewards'}
  ]

  

  // const datares = [
  //   'slide1', 'slide2', 'slide3'
  // ]

  const scrollViewRef = useRef(null)

  const navItems = [{source:'https://tse1.mm.bing.net/th?id=OIP.ixPrG4HhHBvbzOJ98FCyMQHaHa&pid=Api&P=0&h=180', heading:'Cricket'},
    {source:'https://cdn-icons-png.flaticon.com/128/4171/4171190.png', heading:'Crypto'},
    {source:'https://cdn-icons-png.flaticon.com/128/140/140398.png', heading:'Olympics 2024'},
    {source:'https://cdn-icons-png.flaticon.com/128/8656/8656014.png', heading:'Show more'}]

  useEffect(() => {
    const scrollView = scrollViewRef.current;
    const viewWidth = Dimensions.get('window').width; // Width of the viewport
    const contentWidth = viewWidth * datares.length; // Total content width

    if (scrollView) {
        let currentPosition = 0;
        const interval = setInterval(() => {
            currentPosition = (currentPosition + viewWidth) % contentWidth; // Move right by one viewport width
            scrollView.scrollTo({
                x: currentPosition,
                animated: true,
            });
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
      }
  }, [datares]);

  const flatlistitems = [
    {key:'slide', type: 'slides'},
    {key:'trend', type: 'trends'},
    {key:'yesno', type: 'yesno'}
  ]
  // const [dataClick, setClick] = useState(false)
 

  const renderNavItems = ({item}) => (
      <View style={styles.cont}>
            <Image source={{uri:item.source}} style={styles.tinyLogo}></Image>
            <Text style={{fontSize:10}}>{item.heading}</Text>
      </View>
    );


  const renderItems = ({item})=>{
    if (!item || !item.type) {
      console.error('Item or type is undefined:', item);
      return null;
    }

    switch (item.type) {
      case 'slides':
        return (
          <ScrollView
            horizontal
            ref={scrollViewRef}
            pagingEnabled
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <SlidesItems dataresdata={datares} />
          </ScrollView>
        );
      case 'trends':
        return (
          <View style={{height:150}}>
            <Text style={{ marginTop: 0, marginLeft: 15, fontSize:14 }}>Trending Now</Text>
            <ScrollView
              horizontal
              snapToAlignment='center'
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView2}
            >
              <View style={{height: 100 }}>
                <TrendingItems trendsData={trends} />
                <TrendingItems trendsData={trends} />
              </View>
            </ScrollView>
          </View>
        );
      case 'yesno':
        return <YesNoData YesNo={YesNo}/>;
      default:
        console.error('Unknown item type:', item);
        return null;
    }
  }

  return (

    <View style={{height:'auto', paddingTop:'10%', backgroundColor:'#f2f2f2'}}>
      <View style={styles.container}>
        <View style={styles.row}>
          
          <View>
            <View style={styles.navboxes}>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/847/847969.png'}} style={styles.tinyLogo}></Image>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.navboxes} >
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3037/3037255.png'}} style={styles.tinyLogo}></Image>
              </View>
            <View style={styles.navboxes}>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3239/3239952.png'}} style={styles.tinyLogo}></Image>
              </View>
          </View>

        </View>
      </View>
      
      <FlatList
        data={flatlistitems}
        renderItem={renderItems}
        keyExtractor={item => item.key}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <FlatList
              data={navItems}
              renderItem={renderNavItems}
              keyExtractor={item=> item.heading}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.headerContent}
            />
          </View>
        )}
      />

      <View style={styles.final}>
        {HomePort.map((i, index)=>{
          return (
            <View key={index} style={styles.con}>
                <Image source={{uri:i.image}} style={styles.navImages}></Image>
                <Text>{i.text}</Text>
            </View>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con:{
    width:60,
    height:60,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  items:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },  
  final:{
    width: '100%',
    height: 130,
    position: 'absolute',
    bottom: 0,
    paddingBottom:10,
    backgroundColor: 'whitesmoke',
    zIndex: 2,
    justifyContent: 'space-evenly', 
    alignItems: 'flex-start',
    paddingTop:10,
    flexDirection: 'row',
  },
  headerContainer:{
    height:100,
  },
  headerContent:{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
  },

  navImages:{
    width:20,
    height:20,
  },

  container: {
    flex: 1,
    marginBottom:60,
    
  },
  navboxes:{
    width:30,
    height:30,
    margin:10,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  tinyLogo: {
    width: 25,
    height: 25,
    borderStyle:'solid',
    borderColor:'grey',
  },
  cont:{
    width:75,
    height:75,
    borderStyle:'solid',
    borderRadius:5,
    backgroundColor:'white',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginLeft:11,
    elevation:2,
  },
  scrollView: {
    width:'100%',
    height: 150, 
    marginTop:20,
  },
  scrollView1:{
    height:'auto'
  }
  ,
  scrollView2:
  {
    height: 180, 
    marginTop:20,
    paddingLeft:15,
  }
});
