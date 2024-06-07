import { FlatList, StyleSheet, Text, View } from "react-native";
import PokemonList from "../../data.json"
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  return (
    <SafeAreaView style={style.safeAreaView}>
    <Text style={style.heading}>
      Pokemons
    </Text>
      <FlatList data={PokemonList}
      keyExtractor={(item => item.id.toString())}
        renderItem={({ item }) => {
          console.log(item);
          return (
          <View style={style.container}>
              <View style={style.card} key={item.id}>
              <Text style={style.name}>
                {item.name}
              </Text>
              <Text style={style.type}>
                {item.type}
              </Text>
            </View>
      </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  card : {
    borderWidth : 1,
    padding : 18,
    borderColor : "black",
    margin : 2,
    borderRadius : 8,
    alignItems : "center",
    backgroundColor : "white",
    elevation : 5,
  },
  name : {
    fontSize : 26,
    fontWeight: "bold",
  },
  type : {
    color : "grey",
    fontSize :16,
  },
  safeAreaView : {
    backgroundColor : "#f5f5f5",
  },
  heading : {
    fontSize : 34,
    fontWeight : "bold",
    alignSelf : "center",
    textDecorationLine : "underline",
    color : "blue",
  },
  container : {
    margin : 6
  }
})