import React from 'react'
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import OnBoardBackground from '@assets/images/onboard-background.png'

function OnBoard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{
          resizeMode: 'stretch'
        }}
        source={OnBoardBackground}
      >
        <SafeAreaView style={styles.content}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get started</Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  button: {
    flex: 1,
    marginHorizontal: 50,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FF460A',
    fontSize: 17,
		fontWeight: '600'
  }
})

export default OnBoard
