import React,{ Component } from 'react';
import { StyleSheet, Text, View,Image,Button  } from 'react-native';

/**
 * Componet Person
 */
class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {pic: 1};
  }

  render () {

    let pic1 = {
      uri: 'https://previews.123rf.com/images/grgroup/grgroup1611/grgroup161108920/65491767-icono-de-dibujos-animados-chico-ni%C3%B1ez-ni%C3%B1o-peque%C3%B1o-persona-personas-y-el-tema-dise%C3%B1o-aislado-ilustraci%C3%B3n-vectorial.jpg'
    };

    let pic2 = {
      uri: 'https://previews.123rf.com/images/alexutemov/alexutemov1604/alexutemov160401348/54834479-personas-m%C3%BAsico-plana-ilustraci%C3%B3n-personajes-de-dibujos-animados-del-m%C3%BAsico-con-la-guitarra-aislada-en-el-fondo.jpg'
    };

    let picG = null;

    updateImage = () =>{
      this.state.pic===1 ? this.setState({ pic:2}) : this.setState({ pic:1})  
    }

    this.state.pic===1 ? picG=pic1 : picG=pic2;

    return (
      <View style={styles.personContainer}>
        <Text style={styles.heading}>ID: {this.props.id}!</Text>
        <Image source={picG} style={{width: 100, height: 100}}/>
        <Text style={styles.details}>Name: {this.props.name}!</Text>
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Person id='040012' name='Jean Karlo' />
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
  personContainer:{
    alignItems: 'center', 
    backgroundColor: 'rgb(42, 179, 128)'
  },
  heading:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 30,
  },
  details:{
    color:'black',
    fontSize: 20,
  },
});
