import React, { Component }  from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';



/**Example of use Props
 * Props allow create my own componentes for afther that can use in diferentent place
 * You can associate this concept with class and object concepts.
 * 
 */

// Queja use props for build a class.
class Person extends Component {

  render () {

    return (
      <View style={{alignItems: 'center', backgroundColor: 'rgb(42, 179, 128)'}}>
        <Text>ID: {this.props.id}!</Text>
        <Image source={this.props.pic} style={{width: 100, height: 100}}/>
        <Text>Name {this.props.name}!</Text>
      </View>
    )

  }

}


export default class App extends React.Component {
  render() {
    let pic1 = {
      uri: 'https://previews.123rf.com/images/grgroup/grgroup1611/grgroup161108920/65491767-icono-de-dibujos-animados-chico-ni%C3%B1ez-ni%C3%B1o-peque%C3%B1o-persona-personas-y-el-tema-dise%C3%B1o-aislado-ilustraci%C3%B3n-vectorial.jpg'
    };

    let pic2 = {
      uri: 'https://previews.123rf.com/images/alexutemov/alexutemov1604/alexutemov160401348/54834479-personas-m%C3%BAsico-plana-ilustraci%C3%B3n-personajes-de-dibujos-animados-del-m%C3%BAsico-con-la-guitarra-aislada-en-el-fondo.jpg'
    };

    let pic3 = {
      uri:'https://st2.depositphotos.com/1007566/12257/v/950/depositphotos_122570246-stock-illustration-boy-kid-cartoon.jpg'
     
    };


    return (

      <View style={{alignItems: 'center'}}>

      <Text>Conjunto de Personas</Text>
      <Text>Person 1 </Text>
      {/* This is one instace of Queja */}
      <Person id='1_1234' pic={pic1} name='Jean Karlo' />
      <Text>Person 2 </Text>
      {/* This is an other instace of Queja */}
      <Person id='2_1234' pic={pic2} name='Daniel' />
      <Text>Person 3  </Text>
      {/* This is an other instace of Queja */}
      <Person id='3_1234' pic={pic3} name='Jhosue' />
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
