import { useEffect, useState } from "react"
import { ActivityIndicator, Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [refreshing , setRefreshing] = useState(false);
  const [postForm , setPostForm] = useState({
    title : "",
    body : ""
  })
  const [isPosting , setIsPosting] = useState(false);

  const fetchPosts = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    console.log("fetchpost response : ", response);

    const fetchData = await response.json();
    setPosts(fetchData);
    setIsLoading(false);
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts(50);
    setRefreshing(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={style.loader}>
        <ActivityIndicator animating size="large" color="black"/>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  const handleInputChange = (name, value) =>{
    setPostForm({...postForm , [name] : value});
  }

  const addPost = async () => {
    setIsPosting(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(postForm)
    });
    const newPost = await response.json();
    console.log("New post : ", newPost);
    setPosts([newPost, ...posts]);
    setPostForm("");
    setIsPosting(false);
  }


  return (
    <SafeAreaView style={style.container}>

    <View style={style.textInput}>
      <TextInput style={style.input} 
      placeholder="Title"
      name="title"
      value={postForm.title}
      onChangeText={(text) => handleInputChange("title", text)}
      />
      <TextInput style={style.input}
      placeholder="Body"
      name = "body"
      value={postForm.body}
      onChangeText={(text) => handleInputChange("body", text)}
      />
      <Button 
      title={isPosting ? "Adding..." : "Add"} 
      onPress={addPost}
      disabled={isPosting}
      />
    </View>

      <FlatList
      ListEmptyComponent={() => <Text style={style.voidPosts}>No posts found</Text>}
        data={posts}
        renderItem={({ item }) => {
          return (
            <View style={style.card}>
              <Text style={style.titleText}>
                {item.title}
              </Text>

              <Text style={style.bodyText}>
                {item.body}
              </Text>
            </View>
          )
        }}
        ItemSeparatorComponent={() => <View style={{height : 16}}></View>}
        ListHeaderComponent={() => <Text style={style.header}>Posts</Text>}
        ListFooterComponent={() => <Text style={style.footer}>End of Posts</Text>}
        refreshing = {refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : StatusBar.currentHeight,
    paddingHorizontal : 12
  },
  card : {
    borderWidth : 1,
    padding : 10,
    borderRadius : 8
  },
  titleText : {
    fontWeight : "bold",
    fontSize : 22,
  },
  bodyText : {
    color : "#666666"
  },
  header : {
    alignSelf : "center",
    fontSize : 28,
    textDecorationLine : "underline",
    marginBottom : 10
  },
  footer : {
    fontSize : 18,
    alignSelf : "center",
    marginVertical : 12,
    fontWeight : "bold"
  },
  voidPosts : {
    alignSelf : "center",
    margin : "auto",
    fontSize : 24
  },
  loader : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  textInput : {
    padding : 10,
    marginVertical : 12
  },
  input : {
    borderWidth : 1,
    padding : 10,
    marginBottom : 10,
    borderRadius : 8,
    borderColor : "#66666"
  }
})