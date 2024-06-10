import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function UserProfile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.upperContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.voidContainer}></View>
                    <View style={styles.userDetail}>
                        <Ionicons style={styles.icon} name="person" size={70} />
                        <Text style={styles.name} >Robin Mandhotia</Text>
                        <Text>UID : 121112212</Text>
                        <Text style={styles.about} >About</Text>
                        <Text>Gender</Text>
                        <Text style={styles.referral}>Referral ID : 454545454</Text>
                    </View>
                </View>

                <View style={styles.horizontalContainers}>
                    <View style={styles.hContainer}>
                        <Ionicons name="call" color="#4e26a3" size={25} />
                        <Text style={styles.hText}>Call</Text>
                    </View>
                    <View style={styles.hContainer}>
                        <Ionicons name="mail" color="#4e26a3" size={25} />
                        <Text style={styles.hText}>Text</Text>
                    </View>

                    <View style={styles.hContainer}>
                        <Ionicons name="share" color="#4e26a3" size={25} />
                        <Text style={styles.hText}>Share</Text>
                    </View>
                </View>
            </View>

            <View style={styles.common}>
                <Text style={styles.common1} >Saved Addresses</Text>
                <Text style={styles.common2}>Add Address</Text>
            </View>

            <View style={styles.workAddress}>
                <View style={styles.workAddressHeading}>
                    <Ionicons name="home" size={20} />
                    <Text style={styles.work}>Work</Text>
                </View>
                <View>
                    <Text style={styles.workPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur, ullam corporis itaque debitis omnis odio vel fugiat, dolores nobis ex fugit officiis nihil.</Text>
                </View>

                <View style={styles.editContainer}>
                    <Text style={styles.edit}>Edit</Text>
                    <Text style={styles.delete}>Delete</Text>
                </View>
            </View>

            <View style={styles.common}>
                <Text style={styles.common1} >Family Members</Text>
                <Text style={styles.common2}>Add Member</Text>
            </View>

            <View style={styles.items}>
                <Ionicons name="person" size={40} color="grey" />
                <View style={styles.itemsMemberBox}>
                    <Text style={styles.itemsMemberName}>Robin Mandhotia</Text>
                    <Text style={styles.itemsMemberDetail}>Me</Text>
                </View>
            </View>

            <View style={styles.common}>
                <Text style={styles.common1} >My Pets</Text>
                <Text style={styles.common2}>Add Pets</Text>
            </View>
            <View style={styles.items}>
                <Ionicons name="logo-octocat" size={40} color="grey" />
                <View style={styles.itemsMemberBox}>
                    <Text style={styles.itemsMemberName}>Joe</Text>
                    <Text style={styles.itemsMemberDetail}>Cat</Text>
                </View>
            </View>

            
            <View style={styles.common}>
                <Text style={styles.common1} >My Vehicles</Text>
                <Text style={styles.common2}>Add Vehicles</Text>
            </View>
            <View style={styles.items}>
                <Ionicons name="car" size={40} color="grey" />
                <View style={styles.itemsMemberBox}>
                    <Text style={styles.itemsMemberName}>Swift</Text>
                    <Text style={styles.itemsMemberDetail}>Car</Text>
                </View>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        backgroundColor: "white"
    },
    voidContainer: {
        backgroundColor: "#4e26a3",
        height: 60
    },
    userDetail: {
        alignItems: "center"
    },
    icon: {
        backgroundColor: "white",
        padding: 8,
        marginTop: -30,
        color: "grey",
        borderRadius: 12
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5
    },
    about: {
        marginTop: 20,
        fontWeight: "bold"
    },
    referral: {
        marginTop: 20,
        fontWeight: "bold"
    },
    horizontalContainers: {
        margin: 16,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    hContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    hText: {
        color: "#4e26a3",
        fontWeight: "bold",
        marginLeft: 4
    },
    common: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    common1: {
        fontWeight: "bold",
        fontSize: 16
    },
    common2: {
        borderWidth: 1,
        paddingHorizontal: 10,
        fontWeight: "bold",
        borderRadius: 16,
        fontSize: 14
    },
    workAddress: {
        margin: 12,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 12
    },
    workAddressHeading: {
        flexDirection: "row",
        alignItems: "center"
    },
    work: {
        marginLeft: 12
    },
    workPara: {
        fontSize: 14,
        color: "grey",
        marginLeft: 22,
        textAlign: "justify",
        paddingHorizontal: 12
    },
    editContainer: {
        marginLeft: 35,
        flexDirection: "row",
        marginTop: 6
    },
    edit: {
        color: "#4e26a3",
        fontWeight: "bold"
    },
    delete: {
        color: "#4e26a3",
        fontWeight: "bold",
        marginLeft: 12
    },
    items: {
        backgroundColor: "white",
        margin: 12,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius : 12
    },
    itemsMemberBox: {
        marginLeft: 10
    },
    itemsMemberName: {
        fontWeight: "bold",
        fontSize: 16
    },
    itemsMemberDetail: {
        color: 'grey'
    },
})