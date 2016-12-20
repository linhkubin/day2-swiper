import React, { Component } from 'react'
import { View, 
	Text, 
	StyleSheet, 
	utton, 
	Alert, 
	TouchableOpacity,
	Dimensions,
	} from 'react-native'
import Title from './Title'
import Sound from 'react-native-simple-sound'
/**/ 
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class day1 extends Component {
	constructor(props){
		super(props);
		this.state= {
  		minute: 1,
  		second: 5,
  		start: 0,
  	}
}	
	onButton1 = () => {
	  this.setState({minute : this.state.minute +1})
	  if(this.state.minute >=99){
	      	  this.setState({ minute : 0})
	      }
	};
	onButton2 = () => {

	  this.setState({second : this.state.second +1})
	  if (this.state.second >= 60) {
	      	  this.setState({second: 0})
	      }
	  console.log('a'); 	
	};

	onButton3 = () => {
	   if(this.state.start == 1){
	   		this.setState({minute :0, second : 0})
	   		this.setState({start : 0})
	   }else
	   		this.setState({start : 1}),
	   
	   console.log(this.state.start); 
	};

	componentDidMount() {
	   		
	    setInterval(() => {
	      if(this.state.start){
	    	  console.log(this.state.start); 
		      
		      if(this.state.minute == 0 && this.state.second == 0 && this.state.start == 1) { 
			      	this.setState({start: 0})
			      	
			  }else{
			      	this.setState({second: this.state.second - 1})
			  } 
		      if (this.state.second == -1) { this.setState({ minute : this.state.minute -1, second: 59 })}
			   }	
	    },100)
	}
	  
    

  render() {
    return (
    <View >
      	  <View >
              <Title> StopWatch </Title> 
          </View> 
          <View style= {styles.container}>            
              <Text style={{ color : 'lightblue', fontSize: 160, }} >
		           {this.state.minute}:{this.state.second}
		      </Text>         
      	  </View>

      	  <View style={styles.columns} >
	      	  <TouchableOpacity onPress={this.onButton1}>
	       	 	 <View style={styles.circle1} />
		      </TouchableOpacity>	 	 
		      
		      <TouchableOpacity onPress={this.onButton2}>
		   	 	  <View style={styles.circle2} ></View>	      	
		      </TouchableOpacity>

			  <TouchableOpacity onPress={this.onButton3}>
		   	 	  <View style={styles.circle3} ></View>	      	
		      </TouchableOpacity>	      	 
      	  </View>            
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columns: {
   
    flexDirection :"row",
    marginTop :deviceHeight*0.5,
    
  },
  circle1: {
  		
	    marginLeft : deviceWidth/9,  
        height:150,
        width:150,
        borderRadius: 100,
        backgroundColor: 'red'
},
  circle2: {
  		marginLeft : deviceWidth/9,
	    
        height:150,
        width:150,
        borderRadius: 100,
        backgroundColor: 'blue'
},
  circle3: { 	
		marginLeft :  deviceWidth/9,
	    
        height:150,
        width:150,
        borderRadius: 100,
        backgroundColor: 'yellow'
}
})