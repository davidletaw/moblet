import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface signUpProps {}

const signUp = (props: signUpProps) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up screen</Text>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {}
});
