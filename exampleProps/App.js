import React, { Component }  from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}


/**Example of use Props
 * Props allow create my own componentes for afther that can use in diferentent place
 * You can associate this concept with class and object concepts.
 * 
 */

// Queja use props for build a class.
class Queja extends Component {

  render () {

    return (
      <View style={{alignItems: 'center', backgroundColor: 'blue'}}>
        <Text>Queja: {this.props.id}!</Text>
        <Image source={this.props.pic} style={{width: 100, height: 100}}/>
        <Text>Descripcion: {this.props.description}!</Text>
      </View>
    )

  }

}


export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/30629511_2085452011706470_7758051455998623744_n.png?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=2195a14152eb11b1a72c52bf67499bdf&oe=5C7C84CD'
    };

    let pic2 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/14691145_1772646259653715_6259652813948861236_n.jpg?_nc_cat=107&_nc_ht=scontent.fuio1-1.fna&oh=e6f61fac410fbdae7a99c4d0a4443711&oe=5C763871'
    };

    let pic3 = {
      uri:'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/46454453_2261215060796830_4816075441800478720_n.png?_nc_cat=108&_nc_ht=scontent.fuio1-1.fna&oh=de80fe3478bd5091f864f95c7f9684ae&oe=5C718DF8'
     
    };

    let pic4 = {
      uri: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.0-9/44805198_2244272805824389_5538249711309291520_n.png?_nc_cat=100&_nc_ht=scontent.fuio1-1.fna&oh=b7abd18171bc989086628b20f8a9d4fd&oe=5C7DC459'  
    };

    return (

      <View style={{alignItems: 'center'}}>

      <Text>Conjunto de Quejas</Text>
      {/* This is one instace of Queja */}
      <Queja id='1_1234' pic={pic} description='Esta es una prueba de props 1' />
      <Text>Queja No2 </Text>
      {/* This is an other instace of Queja */}
      <Queja id='2_1234' pic={pic2} description='Esta es una prueba de props 2' />
      <Text>Queja No3 </Text>
      {/* This is an other instace of Queja */}
      <Queja id='3_1234' pic={pic3} description='Esta es una prueba de props 3' />
      <Text>Queja No4 </Text>
      {/* This is an other instace of Queja */}
      <Queja id='4_1234' pic={pic4} description='Esta es una prueba de props 4' />
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
