import { Button, StyleSheet, Text, View } from "react-native";

export default function DashboardSettingsScreen () {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>
        Dashboard Settings Screen
        </Text>
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