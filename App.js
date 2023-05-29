import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity,Alert } from 'react-native';


export default function App() {
  function mensaje(){
    Alert.alert('Genial!')
  }

  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/fondo1.png' )} resizeMode='cover' style={styles.fondo}>
        <ImageBackground style={styles.fono2}
        source={require('./assets/fondo2.png' )}>
          <Image 
          style={styles.imgUser} 
          source={require('./assets/usuario.png' )}
          />
          <TextInput 
          style={styles.input} 
          placeholder='ID de Usuario'
          />
          <Image 
          style={styles.imgIconos} 
          source={require('./assets/user.png' )}
          />
          <TextInput 
          style={styles.input2} 
          placeholder='Contraseña'
          />
          <Image 
          style={styles.imgIconos2} 
          source={require('./assets/contra.png' )}
          />
          <TouchableOpacity>
            <Text style={styles.btnTxt}
            onPress={() => Alert.alert('Contraseña enviada a su correo')}
            >Olvido su contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAcceder} onPress={mensaje}>
            <Text
            style={styles.txtAccion}
            >Acceder</Text>
          </TouchableOpacity>
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
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  fono2:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 500,
  },
  imgUser:{
    top: -150,
    width: 100,
    height: 100,
  },
  input:{
    backgroundColor: '#c0c0c0',
    width: 300,
    height: 50,
    top: -110,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  input2:{
    backgroundColor: '#c0c0c0',
    width: 300,
    height: 50,
    top: -80,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  imgIconos:{
    top: 110,
    left: 280, 
    width: 20,
    height: 30,
    position: 'absolute'
  },
  imgIconos2:{
    top: 190,
    left: 280, 
    width: 20,
    height: 30,
    position: 'absolute'
  },
  btnTxt: {
    fontSize: 18,
    marginLeft: 110,
    top: -40,
    color: '#4d4d4d'
  },
  btnAcceder:{
    backgroundColor: '#004000',
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: 20
  },
  txtAccion:{
    color: '#e8e8e8',
    fontSize: 30
  },
  

});
