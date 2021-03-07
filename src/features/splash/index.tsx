import React from 'react'
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Commons } from '@styles'
import SplashBackground from '@assets/images/splash-background.png'
import Logo from '@assets/images/logo.png'

function Splash() {
  return (
    <View style={Commons.container}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{
          resizeMode: 'cover'
        }}
        source={SplashBackground}
      >
        <SafeAreaView style={styles.contentWrapper}>
          <View style={styles.content}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10
              }}
            >
              <View style={styles.logoContainer}>
                <Image style={{ width: 62, height: 61 }} source={Logo} />
                <Text
                  style={{
                    color: '#FF240C',
                    fontFamily: 'JosefinSans-SemiBold',
                    fontWeight: '600',
                    fontSize: 28,
                    marginTop: 8
                  }}
                >
                  Foodie
                </Text>
              </View>
              <Text
                style={{
                  color: '#FF240C',
                  fontFamily: 'JosefinSans-SemiBold',
                  fontWeight: '600',
                  fontSize: 13,
                  marginTop: 10
                }}
              >
                Food for Everyone
              </Text>
            </View>
            <ActivityIndicator size="large" color="#FF240C" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: 262,
    height: 262,
    borderRadius: 131,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
    paddingBottom: 35
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Splash
