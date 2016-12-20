/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
} from 'react-native';
  import MapView , { Marker } from 'react-native-maps';
 var {height,width} = Dimensions.get('window');
 
 // function getRandomInt(min,max){
 // 	min = Math.ceil(min);
 // 	max = Math.floor(max);
 // 	return Math.floor(Math.random()*(max-min))+min;		
 // 	}
 
 export default class App extends Component{
     // constructor(props){
     // 	super(props);
     // 	this.state={
     // 		marker: 0
     // 	}
     // }	
 render(){
	return(		
		<View >
		<MapView style={styles.map}
		    initialRegion={{
		    latitude :37.78825,
            longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
		 	}}
		 	showsUserLocation={true}
		 />
		 </View>
	);
 }

}
const styles = StyleSheet.create({
map: {
	width: width-30,
	height: height-30,
}
});
