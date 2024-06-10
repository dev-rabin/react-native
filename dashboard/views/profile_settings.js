import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { fetchUserData } from "../services/api_service";
import { useEffect, useState } from "react";

export default function ProfileSettings() {
    const [userData, setUserData] = useState([]);

    const fetchUser = async () => {
        try {
            const responseData = await fetchUserData();
            setUserData(responseData);
        } catch (error) {
            console.error("Data fetching error!", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                {userData.length === 0 ? (
                    <Text>No Data Found!</Text>
                ) : (
                    userData.map((user, index) => (
                        <View key={index}>
                            <Text style={styles.welcomeText}>Welcome</Text>
                            <Text style={styles.nameText}>{user.name}</Text>
                        </View>
                    ))
                )}
            </View>

            <View style={styles.commonContainer}>
                <View>
                    <Text style={styles.heading}>PROFILE</Text>
                    <Text style={styles.subHeading}>EDIT PHOTO / INFO</Text>
                </View>
                <View>
                    <Ionicons name="arrow-forward" color="white" size={20} />
                </View>
            </View>

            <View style={styles.commonContainer}>
                <View>
                    <Text style={styles.heading}>VERIFY</Text>
                    <Text style={styles.subHeading}>EMAIL ADDRESS</Text>
                </View>
                <View>
                    <Ionicons name="arrow-forward" color="white" size={20} />
                </View>
            </View>

            <View style={styles.commonContainer}>
                <View>
                    <Text style={styles.heading}>AADHAR CARD</Text>
                    <Text style={styles.subHeading}>ADD COPY</Text>
                </View>
                <View>
                    <Ionicons name="arrow-forward" color="white" size={20} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nameContainer: {
        margin: 20
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    nameText: {
        color: "grey",
        fontSize: 20
    },
    commonContainer: {
        margin: 14,
        backgroundColor: "#4e26a3",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderRadius: 14
    },
    heading: {
        color: "white",
        fontSize: 12,
        marginBottom: 2
    },
    subHeading: {
        color: "white",
        fontWeight: "bold"
    }
});
