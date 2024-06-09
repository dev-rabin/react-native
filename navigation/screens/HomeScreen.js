import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen ({navigation, route}) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>
        Home Screen
        </Text>
        <Text style={styles.text}>
        {route.params?.data}
        </Text>
        <Button title="Go to About Screen" onPress={()=> navigation.navigate("About", {
            name : "Robin"
        })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    text: {
        fontSize : 30,
        fontWeight : "bold"
    }
})