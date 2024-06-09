import { Button, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen({ naviagtion }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title="Toggle Drawer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
