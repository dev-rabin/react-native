import { useState } from "react";
import { Button, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, Platform } from "react-native";

export default function HomeScreen() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {}

    if (!form.email) errors.email = "Email is required!";
    if (!form.password) errors.password = "Password is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submiotted with : ", form.email, form.password);
      setForm({ email: "", password: "" });
      setErrors({})
    }
  }

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };


  return (
    <SafeAreaView style={style.container}>

      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
        <View style={style.form}>
          <Text style={style.header}>Login</Text>
          <View>
            <Text style={style.emailLabel}>Email :</Text>
            <TextInput style={style.input}
              name="email"
              value={form.email}
              placeholder="email@example.com"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            {
              errors.email ? <Text style={{ color: "red" }}>{errors.email}</Text> : null
            }
          </View>

          <View>
            <Text style={style.passwordLabel}>Password :</Text>
            <TextInput style={style.input}
              name="password"
              value={form.password}
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry={true}
            />
            {
              errors.password ? <Text style={{ color: "red", marginBottom: 10 }}>{errors.password}</Text> : null
            }
            <Button onPress={handleSubmit} title="Login" color="purple" />
          </View>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    color: "black",
    margin: 10,
    justifyContent: "center",
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
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
    margin: 10
  },
  header: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold"
  },
  passwordLabel: {
    marginVertical: 8
  },
  emailLabel: {
    marginVertical: 8
  },
})