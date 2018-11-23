import React, { Component }  from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

class Queja extends Component {

  constructor(props) {
 
    let pic1 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/30629511_2085452011706470_7758051455998623744_n.png?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=2195a14152eb11b1a72c52bf67499bdf&oe=5C7C84CD'
    };

    let pic2 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/14691145_1772646259653715_6259652813948861236_n.jpg?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=e6f61fac410fbdae7a99c4d0a4443711&oe=5C763871'
    };

    super(props);
    this.state = {pic: pic1};
  }

  render () {

    let pic1 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/30629511_2085452011706470_7758051455998623744_n.png?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=2195a14152eb11b1a72c52bf67499bdf&oe=5C7C84CD'
    };

    let pic2 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/14691145_1772646259653715_6259652813948861236_n.jpg?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=e6f61fac410fbdae7a99c4d0a4443711&oe=5C763871'
    };

    updateImage = () =>{
      if(this.state.pic===pic1){
        this.setState({ pic:pic2})
      }
      else{
        this.setState({ pic:pic1})
      }
    }

    return (
      <View style={{alignItems: 'center', backgroundColor: 'blue'}}>
        <Text>Queja: {this.props.id}!</Text>
        <Image source={this.state.pic} style={{width: 100, height: 100}}/>
        <Text>Descripcion: {this.props.description}!</Text>
        <Button
          onPress={updateImage}
          title="Cambiar imagen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )

  }

}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };


    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), this.props.intervalTime);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}


export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>

        <View>
        <Text>Example of State</Text>
        </View>
        <View>
          <Queja id='1_1234' description='Esta es una prueba de props 1'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
