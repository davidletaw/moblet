import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import signUp from "./signUp";
import { useNavigation } from "@react-navigation/native";

const resetPassword = () => {
  const navigation = useNavigation();
  const [passwordText, onChangePasswordText] = React.useState("");

  return (
    <View>
      <Text style={styles.heading}>Reset Password</Text>
      {/* 
        
        handle errors for email and password validation
        
        */}

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangePasswordText}
        value={passwordText}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangePasswordText}
        value={passwordText}
      />

      <TouchableOpacity style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        If you do not have an account,
        <Text
          style={styles.link}
          onPress={() => {
            navigation.navigate("signUp");
          }}
        >
          {" "}
          Sign Up here
        </Text>
      </Text>

      <Text style={styles.subtitle}>
        Reset password
        <Text
          style={styles.resetPassword}
          onPress={() => {
            navigation.navigate("resetPassword");
          }}
        >
          {" "}
          here
        </Text>
      </Text>
    </View>
  );
};

export default resetPassword;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    alignSelf: "center",
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
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
  },
  subtitle: {
    fontSize: 12,
    alignSelf: "center",
  },
  link: {
    fontSize: 12,
    color: "blue",
  },
  resetPassword: {
    fontSize: 12,
    color: "red",
  },
});
