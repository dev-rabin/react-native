import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import PokemonList from "../../data.json"
import { SafeAreaView } from "react-native-safe-area-context";
import groupedPokemonList from "../../groupedData.json";

export default function HomeScreen() {

  return (
    <SafeAreaView style={style.safe}>
      <View>
        {/* <FlatList data={PokemonList}
      keyExtractor={(item => item.id.toString())}
        renderItem={({ item }) => {
          console.log(item);
          return (
          <View style={style.container}>
              <View style={style.card} key={item.id}>
              <Text style={style.cardText}>
                {item.name}
              </Text>
              <Text style={style.type}>
                {item.type}
              </Text>
            </View>
      </View>
          )
        }}
        ListEmptyComponent={()=> <Text style={style.empty}>
        No items found
      </Text>}
      ListHeaderComponent={() => <Text style={style.headerText}>Pokemons List</Text>}
      ListFooterComponent={() => <Text style={style.footerText}>End of Pokemon List</Text>}
      /> */}

      <SectionList
        sections={groupedPokemonList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <View style={style.card}>
              <Text style={style.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={style.sectionHeader}>
              <Text style={style.sectionText}>{section.type}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  safe: {
    paddingHorizontal: 16
  },
  card: {
    borderWidth: 1,
    padding: 18,
    borderColor: "black",
    // margin : 2,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  cardText: {
    fontSize: 26,
    // fontWeight: "bold",
  },
  type: {
    color: "grey",
    fontSize: 16,
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    alignSelf: "center",
    textDecorationLine: "underline",
    color: "blue",
  },
  container: {
    margin: 16
  },
  empty: {
    flex: 1,
    fontSize: 40,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "blue"
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  sectionText: {
    color: "black",
    fontSize: 20,
    marginVertical: 12
  }
})