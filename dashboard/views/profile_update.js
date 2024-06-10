import React, { useEffect, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Alert, FlatList } from "react-native";
import { fetchUserData, updateUserDetails } from "../services/api_service";

export default function ProfileUpdate({ navigation }) {
    const [userData, setUserData] = useState(null);
    const [form, setForm] = useState({
        name: "",
        phone_number: "",
        gender: "",
        dob: "",
        city: "",
        about: "",
        address: ""
    });

    const fetchUser = async () => {
        try {
            const responseData = await fetchUserData();
            console.log("user response data:", responseData);
            setUserData(responseData);
        } catch (error) {
            console.error("Data fetching error!", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useLayoutEffect(() => {
        if (userData) {
            setForm({
                name: userData.name,
                phone_number: userData.phone_number,
                gender: userData.gender,
                dob: userData.dob,
                city: userData.city,
                about: userData.about,
                address: userData.address
            });
        }
    }, [userData]);

    const handleInputChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleUpdateUser = async () => {
        try {
            const { name, phone_number, gender, dob, city, about, address } = form;

            if (!name || !phone_number || !gender || !dob || !city || !about || !address) {
                return (
                    Alert.alert("Please fill all details!", "Make sure to provide all required information.")
                )
            }
            const response = await updateUserDetails(form);
            console.log("update response:", response);
            Alert.alert("Success", "Profile updated successfully!");
            navigation.navigate("User Dashboard");
            setForm({
                name: "",
                phone_number: "",
                gender: "",
                dob: "",
                city: "",
                about: "",
                address: ""
            });
        } catch (error) {
            Alert.alert("Error", `Failed to update profile! ${error.message}`);
            console.error("Update error:", error);
        }
    };

    return (
        <>


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
            <FlatList data={userData}
                renderItem={({ item }) => {
                    console.log("Flatlist item : ", item)
                    return (
                        <>
                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>User Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.name}
                                        value={form.name}
                                        onChangeText={(text) => handleInputChange("name", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>Phone Number</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.phone_number}
                                        value={form.phone_number}
                                        onChangeText={(text) => handleInputChange("phone_number", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>Gender</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.gender}
                                        value={form.gender}
                                        onChangeText={(text) => handleInputChange("gender", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>DOB</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.dob}
                                        value={form.dob}
                                        onChangeText={(text) => handleInputChange("dob", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>City</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.city}
                                        value={form.city}
                                        onChangeText={(text) => handleInputChange("city", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>About</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.about}
                                        value={form.about}
                                        onChangeText={(text) => handleInputChange("about", text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.textInputContainer}>
                                <View>
                                    <Text>Address</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={(item.address || "Address")}
                                        value={form.address}
                                        onChangeText={(text) => handleInputChange("address", text)}
                                    />
                                </View>
                            </View>
                        </>
                    )
                }}
            />
            <View style={styles.updateButtonContainer}>
                <Pressable style={styles.updateButton} onPress={handleUpdateUser}>
                    <Text style={styles.updateButtonText}>Update</Text>
                </Pressable>
            </View>
        </>
    );
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
        marginBottom: 20
    },
    updateButtonText: {
        color: "white",
        fontSize: 16
    }
});
