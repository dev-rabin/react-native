import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function ProfileUpdate({navigation}) {
    return (
        <ScrollView>
            <View style={{ margin: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Change</Text>
                <Text style={{ color: "grey" }}>Profile Photo</Text>
            </View>

            <View>
                <View style={styles.pictureContainer}>
                    <Ionicons name="person" size={50} color="grey" style={styles.pic} />
                    <Text style={styles.photoText}>Change Photo</Text>
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>User Name</Text>
                    <TextInput style={styles.input} placeholder="Your Name" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>Phone Number</Text>
                    <TextInput style={styles.input} placeholder="Your Number" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>Gender</Text>
                    <TextInput style={styles.input} placeholder="eg. Male" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>DOB</Text>
                    <TextInput style={styles.input} placeholder="eg. 26/07/1999" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>City</Text>
                    <TextInput style={styles.input} placeholder="eg. Palwal" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>About</Text>
                    <TextInput style={styles.input} placeholder="eg. Full Stack Developer" />
                </View>
            </View>

            <View style={styles.textInputContainer}>
                <View>
                    <Text>Address</Text>
                    <TextInput style={styles.input} placeholder="eg. H no. Dx 71/1, Palwal-Harayana" />
                </View>
            </View>

            <View style={styles.updateButtonContainer}>
                <Pressable style={styles.updateButton} onPress={() => navigation.navigate("User Dashboard")}>
                    <Text style={styles.updateButtonText}>Update</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    pictureContainer: {
        alignItems: "center"
    },
    pic: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 12
    },
    photoText: {
        marginVertical: 10,
        backgroundColor: "#4e26a3",
        color: "white",
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        width: 120,
    },
    textInputContainer: {
        margin: 14
    },
    input: {
        borderBottomWidth: 1,
        padding: 8
    },
    updateButtonContainer: {
        alignItems: "center",
        marginTop: 20
    },
    updateButton: {
        backgroundColor: "#4e26a3",
        padding: 10,
        borderRadius: 12,
        width: 120,
        alignItems: "center",
        marginBottom : 20
    },
    updateButtonText: {
        color: "white",
        fontSize: 16
    }
});
