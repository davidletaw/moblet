import { StyleSheet, Image } from 'react-native';

// @ts-ignore
export default function ImageViewer({ selectedImage, placeholderImageSource }) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
