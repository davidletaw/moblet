import {StatusBar} from 'expo-status-bar';
import {Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {registerRootComponent} from 'expo';
import {useState} from "react";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require('./assets/images/background-image.png')

export const App = () => {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo'/>
        <Button label='Use this photo'/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

registerRootComponent(App)
