import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

interface loginProps {}

const login = (props: loginProps) => {
    const [emailText, onChangeEmailText] = React.useState('');
    const [passwordText, onChangePasswordText] = React.useState('');
    const onPress = () => {
        console.log('pressed')
    }


  return (
    <View>
        <Text style={styles.heading}>
            Log In
        </Text>

        <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={onChangeEmailText}
            value={emailText}
        /> 
        {/* 
        
        handle errors for email and password validation
        
        */}

        <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={onChangePasswordText}
            value={passwordText}
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>
            If you do not have an account, Sign Up here
        </Text>
      </View>
  );
};

export default login;

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        alignSelf: 'center',
        padding: 40,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        height: 40,
        margin: 12,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
      },
      subtitle: {
        fontSize: 12,
        alignSelf: 'center'
      }
  });
  