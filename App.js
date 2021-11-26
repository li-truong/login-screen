import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Modal, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('screen');

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      event: '',
      description: '',
      data: [{
        event: 'do something',
        description: 'description 1',
        timeRemain: 0,
      },
      {
        event: 'do something1',
        description: 'description 1',
        timeRemain: 0,
      },
      {
        event: 'do something2',
        description: 'description 1',
        timeRemain: 0,
      },
      {
        event: 'do something3',
        description: 'description 1',
        timeRemain: 0,
      },
      {
        event: 'do something3',
        description: 'description 1',
        timeRemain: 0,
      }]
    }
  }

  renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.event}> {item.event} </Text>
      <Text style={styles.description}> {item.description} </Text>
      <Text style={styles.timeRemain}> {`${item.timeRemain} days remaining`} </Text>
      <TouchableOpacity
        onPress={() => {
          const temp = [...this.state.data]
          this.setState({ data: temp.filter(item => temp.indexOf(item) !== index) })
        }}
        style={styles.delete}>
        <Image source={require('./assets/delete.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </View>
  )

  onchangeEvent = (text) => {
    this.setState({ event: text })
  }

  onchangeDescription = (text) => {
    this.setState({ description: text })
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Date Countdown </Text>
          </View>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} style={styles.add}>
            <Image source={require('./assets/add.png')} />
          </TouchableOpacity>
          <Modal
            visible={this.state.visible}
            animationType="slide"
            transparent={true}
          >
            <View style={{
              flex: 1,
              backgroundColor: '#000000AA',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TextInput style={styles.input} onChangeText={this.onchangeEvent} value={this.state.event} placeholder='Event' />
              <TextInput style={styles.input} onChangeText={this.onchangeDescription} value={this.state.description} placeholder='Description' />
              {/* <TextInput style={styles.input} value={this.state.event} placeholder='Email học sinh' /> */}
              <TouchableOpacity
                onPress={() => {
                  console.log(this.state);
                  const item = {
                    event: this.state.event,
                    description: this.state.description,
                    timeRemain: 10
                  }
                  this.setState({ visible: false, data: [...data, item] })
                }}
              >
                <View
                  style={styles.button}
                >
                  <Text style={styles.headerText}> ADD </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: width,
    height: height * 0.08,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    paddingLeft: 10
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    width: width,
    height: height * 0.15,
    borderBottomColor: '#bdbdbd',
    borderWidth: 1
  },
  delete: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  event: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  description: {
    marginLeft: 10,
    fontSize: 18,
  },
  timeRemain: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'white',
    width: width * 0.8,
    height: height * 0.08,
    borderRadius: 5,
    marginBottom: 10
  },
  add: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  button: {
    width: width * 0.5,
    height: height * 0.1,
    backgroundColor: '#3f51b5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default App
