import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen ({navigation,route}) {
    const {name} = route.params;
    return (
        <View style={styles.container}>
        <Text style={styles.text}>
        About Screen
        </Text>
        <Text style={styles.text}>
        {name}
        </Text>
        <Button title="Go to Home Screen" onPress={()=> navigation.navigate("Home", {data : "Data from about screeen"})} />
        <View style={{height : 10}}></View>
        <Button title="Update Data" onPress={() => navigation.setParams({
            name : "Dev Rabin"
        })}/>
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