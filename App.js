import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/fondo1.png' )} resizeMode='cover' style={styles.image}>
        <ImageBackground style={styles.img}
        source={require('./assets/fondo2.png' )}>
          <Image style={styles.imgUser} source={require('./assets/usuario.png' )}/>
          <Text style={styles.tetx}>Open up App.js to start!</Text>
        </ImageBackground>
        
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8080ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  tetx: {
    justifyContent: 'center'
  },
  img:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 500,
  },
  imgUser:{
    top: -250,
    width: 100,
    height: 100,
  }

  
});
