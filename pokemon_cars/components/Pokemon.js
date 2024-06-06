import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function Pokemon({
  name,
  hp,
  image,
  type,
  moves,
  weaknesses
}) 


{
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image style={styles.image} resizeMode="contain" source={image} />

    <View style={styles.typeContainer}>
    <View style={[styles.badge , {borderColor}]}>
    <Text style={styles.emoji}>{emoji}</Text>
    <Text style={styles.type}>{type}</Text>
    </View>
    </View>

     <View style={styles.movesContainer}>
     <Text style={styles.movesText}>Moves : {moves.join(", ")}</Text>
     </View>
      
      <View style={styles.weaknessContainer}>
      <Text style={styles.weaknessText}>Weaknesses : {weaknesses}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor : "white",
    borderWidth: 2,
    borderRadius: 16,
    margin: 20,
    ...Platform.select({ios : {
      shadowOffset: { width: 2, height: 2 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },android : {
      elevation : 10
    }})
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 12,
    alignSelf: "center",
  },
  box1: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24
  },
  hp: {
    fontSize: 24,
    fontWeight: "bold",
  },
  typeContainer : {
    alignSelf: "center",
    padding : 16,
  },
  badge : {
    flexDirection : "row",
    alignItems:"center",
    paddingVertical : 6,
    paddingHorizontal : 12,
    borderWidth : 2,
    borderRadius : 20
  },
  emoji : {
    fontSize : 30,
    marginRight : 12
  },
  type : {
    fontSize : 22,
    fontWeight : "bold"
  },

  weaknessContainer : {
    marginVertical : 10
  },
  movesText : {
    fontSize : 20,
    fontWeight : "bold"
  },
  weaknessText : {
    fontSize : 20,
    fontWeight : "bold"
  }
})
