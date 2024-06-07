import { useState } from "react";
import { Button, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet,Text, TextInput, View, Platform } from "react-native";

export default function HomeScreen () {

  const [form , setForm] = useState({
    email : "",
    password : ""
  });

  return (
    <SafeAreaView style={style.container}>

    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
    <View style={style.form}>
      <Text style={style.header}>Login</Text>
     <View>
      <Text style={style.emailLabel}>Email :</Text>
      <TextInput style={style.input}
      value={form.email}
      placeholder="email@example.com"
      autoCapitalize="none"
      autoCorrect = {false}
      onChange={() => {setForm}}
      />
    </View>

    <View>
      <Text style={style.passwordLabel}>Password :</Text>
    <TextInput style={style.input}
      value={form.password}
      placeholder="password"
      autoCapitalize="none"
      autoCorrect = {false}
      onChange={() => {setForm}}
      secureTextEntry={true}
      />
    <Button title="Login" onPress={()=> {}} color="purple"/>
    </View>
     </View>
    </KeyboardAvoidingView>
    
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal: 20,
    color : "black",
    margin : 10,
    justifyContent : "center",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input : {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  text : {
    fontSize : 25,
    margin : 10
  },
  header : {
    fontSize : 20,
    alignSelf : "center",
    fontWeight : "bold"
  },
  passwordLabel : {
    marginVertical : 8
  },
  emailLabel : {
    marginVertical : 8
  },
})