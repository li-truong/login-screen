import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const { width, height } = Dimensions.get('screen')

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.signInContainer}>
          <TextInput
            style={styles.input}
            placeholder="Skype Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Notification",
                "Sing in Success !!!",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK" }
                ]
              );
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> Sign In </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomText}> Sign in with a Microsoft Account </Text>
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.bottomText}> Create an Account </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain'
  },
  signInContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#999999',
    height: 40,
    width: width * 0.7,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  button: {
    width: width * 0.7,
    backgroundColor: '#4DA6FF',
    height: 40,
    margin: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  },
  bottomContainer: {
    flex: 2,
  },
  bottomItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999999',
    borderWidth: 1
  },
  bottomText: {
    color: '#4DA6FF',
    fontSize: 18
  }
});

export default App;
