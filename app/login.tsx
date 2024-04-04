import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface loginProps {}

const login = (props: loginProps) => {
    const navigation = useNavigation();
    const [emailText, onChangeEmailText] = React.useState('');
    const [passwordText, onChangePasswordText] = React.useState('');


  return (
    <View>
        <Text style={styles.heading}>
            Log In
        </Text>

        <TextInput
            style={styles.input}
            placeholder='Email'
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={onChangeEmailText}
            value={emailText}
        /> 


        <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={onChangePasswordText}
            value={passwordText}
        />

        {/* 
        
        handle errors for email and password validation
        
        */}
        
        <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>
            If you do not have an account, <Text style={styles.link} onPress={() => {
                navigation.navigate('signup')
            }}> Sign Up here
            </Text>
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
        alignSelf: 'center',
      },
      link: {
        fontSize: 12,
        color: 'blue',
      }
  });
  