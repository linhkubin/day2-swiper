import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 10,
      right: 10
    }}>
      <Text style={{ color: 'grey' }}>
        <Text style={{
          color: 'white',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render () {
    return (
      <View>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Swiper style={styles.wrapper} height={600} 
          enderPagination={renderPagination}
          
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
          <View style={styles.slide} >
            <Image style={styles.image} source={require('../img/1.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image style={styles.image} source={require('../img/2.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('../img/3.jpg')} />
          </View>
          <View style={styles.slide}>
            <Image  style={styles.image} source={require('../img/4.jpg')} />
          </View>
        </Swiper>
      </View>
    )
  }
}