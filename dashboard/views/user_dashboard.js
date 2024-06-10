import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchUserData } from "../services/api_service";
import { useLayoutEffect, useState } from "react";

export default function UserDashboard({ navigation }) {
    const [userData, setUserData] = useState([]);
    const fetchUser = async () => {
        try {
            const responseData = await fetchUserData();
            console.log("user dashboard response data:", responseData);
            setUserData(responseData);
        } catch (error) {
            console.error("Data fetching error!", error);
        }
    };
    useLayoutEffect(() => {
        fetchUser();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.icons}>
                    <Ionicons name="person" color="white" size={25} />
                    <Ionicons name="book" color="white" size={25} />
                    <Ionicons name="menu" color="white" size={25} />
                    <Ionicons
                        name="settings"
                        color="white"
                        size={25}
                        onPress={() => navigation.navigate("User Profile", { userDetails: userData })}
                    />

                </View>

            </View>
            <View style={styles.nameContainer}>
                <Ionicons style={styles.profile} name="person" size={100} color="grey" />
                <View style={styles.profileText}>
                    <FlatList data={userData}
                        renderItem={({ item }) => {
                            console.log("item flatlist : ", item)
                            return (
                                <>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                    <View style={styles.uidContainer}>
                                        <Text style={styles.uidText}>UID : {item.user_id} </Text>
                                        <View style={styles.locationContainer}>
                                            <Ionicons name="location" />
                                            <Text style={styles.locationText}>{item.city}</Text>
                                        </View>
                                    </View>
                                </>
                            )
                        }}
                    />
                </View>
            </View>

            <View style={styles.bulletinContainer}>
                <View style={styles.bulletinSubContainer}>
                    <Text style={styles.bulletinHeading}>Bulletin Board</Text>
                    <Text style={styles.bulletinSubHeading}>The new Broadcast</Text>
                    <Text style={styles.bulletinPara}>
                        "Beauty comes from inside, inside the beauty salon."
                    </Text>
                </View>
                <Text style={styles.bulletinReadMore}>Read More</Text>
            </View>

            <View style={styles.twoContainer}>

                <View style={styles.firstContainer}>
                    <Text>Support</Text>
                    <Text>24/7 Access call</Text>
                </View>

                <View style={styles.secondContainer}>
                    <Text style={styles.secondContainerText1}>Today - 10 June</Text>
                    <Text style={styles.secondContainerText2}>0 - Appointment</Text>
                    <Text style={styles.secondContainerText3}>0 - Upcoming</Text>
                </View>
            </View>

            <View style={styles.membershipContainer}>
                <Text style={styles.membershipHeading}>My Membership</Text>
                <View style={styles.membershipSubContainer}>
                    <Text style={styles.membershipPara}>Manage and make bookings using your membership</Text>
                    <Ionicons style={styles.membershipIcon} name="arrow-forward" size={25} />
                </View>
            </View>

            <View style={styles.threeContainer}>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Loyalty</Text>
                    <Text style={styles.bottomText}>0</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Following</Text>
                    <Text style={styles.bottomText}>0</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Transactions</Text>
                    <Text style={styles.bottomText}>0</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        backgroundColor: "#4e26a3",
        padding: 15,
        height: 90
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        marginLeft: 100,
    },
    nameContainer: {
        flexDirection: "row",
        paddingHorizontal: 12,
        marginTop: -60
    },
    profile: {
        alignItems: "baseline",
        backgroundColor: "white",
        padding: 4,
        borderRadius: 8
    },
    profileText: {
        justifyContent: "center",
        marginTop: 58,
        marginLeft: 12
    },
    uidContainer: {
        flexDirection: "row"
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 20
    },
    locationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    bulletinContainer: {
        margin: 15,
        // borderWidth : 1,
        borderColor: "grey",
        borderRadius: 12,
        elevation: 5,
        backgroundColor: "white",
    },
    bulletinSubContainer: {
        padding: 10
    },
    bulletinHeading: {
        fontWeight: "bold",
        fontSize: 20
    },
    bulletinSubHeading: {
        fontWeight: "bold"
    },
    bulletinPara: {
        paddingHorizontal: 2
    },
    bulletinReadMore: {
        alignSelf: "flex-end",
        padding: 20,
        backgroundColor: "#4e26a3",
        color: "white",
        paddingHorizontal: 80,
        borderTopLeftRadius: 80,
        borderBottomRightRadius: 11
    },
    twoContainer: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    firstContainer: {
        padding: 28,
        borderRadius: 12,
        backgroundColor: "white",
        elevation: 5
    },
    secondContainer: {
        padding: 28,
        borderRadius: 12,
        backgroundColor: "#4e26a3",
        elevation: 5
    },
    secondContainerText1: {
        color: "white",
        marginBottom: 2,
        fontSize: 16
    },
    secondContainerText2: {
        fontWeight: "bold",
        color: "white",
        marginBottom: 2,
        fontSize: 12
    },
    secondContainerText3: {
        color: "white",
        fontSize: 12
    },
    membershipContainer: {
        margin: 14,
        padding: 10,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10
    },
    membershipHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4e26a3",
        marginBottom: 8
    },
    membershipSubContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    membershipPara: {
        padding: 2
    },
    threeContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 12
    },
    bottomContainer: {
        backgroundColor: "#4e26a3",
        alignItems: "center",
        borderRadius: 12,
        width : 100,
        height : 75,
        justifyContent : "center"
    },
    bottomText: {
        color: "white"
    }
})