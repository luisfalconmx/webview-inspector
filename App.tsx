// import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { WebView } from 'react-native-webview'
// import * as Location from 'expo-location'
// import type { LocationObject } from 'expo-location'

export default function App() {
  const url = 'https://portal-now-remesas.luisfalconmx.dev/?latitude=19.957860&longitude=-99.844440'
  const shortUrl = url.slice(0, 15)

  // const [location, setLocation] = useState<LocationObject>()
  // const [errorMsg, setErrorMsg] = useState('')

  // useEffect(() => {
  //   ;(async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync()
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied')
  //       return
  //     }

  //     const location = await Location.getCurrentPositionAsync({})
  //     setLocation(location)
  //   })()
  // }, [])

  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.navbar}>
        <Text style={styles.navbarText}>{shortUrl}</Text>
        <Text style={styles.navbarXButton}>x</Text>
      </View>

      <WebView style={styles.container} source={{ uri: url }} />

      {/* {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : (
        <View style={styles.block}>
          <Text>latitude: {location?.coords.latitude}</Text>
          <Text>longitude: {location?.coords.longitude}</Text>
        </View>
      )} */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#171436',
    paddingBottom: 12
  },
  navbarText: {
    color: 'white',
    fontSize: 16
  },
  navbarXButton: {
    color: 'white',
    fontSize: 24,
    position: 'absolute',
    right: 12,
    bottom: 12
  },
  error: {
    color: 'red'
  },
  block: {
    padding: 12
  }
})
