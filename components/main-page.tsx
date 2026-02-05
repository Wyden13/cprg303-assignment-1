import { StatusBar, StyleSheet, View,Image, TextInput, ScrollView,Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Button from "./button";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.postInputContainer}>
        <Image 
        source={require('../assets/images/noprofile.png')}
        style={styles.image} />
        <TextInput 
          style={styles.input}
          placeholder="What's on your mind?"
          />
        <FontAwesome name="file-picture-o" size={24} color="#4c4c4cff" />
      </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
              <View style={styles.storyCard}></View>
              <View style={styles.storyCard}></View>
              <View style={styles.storyCard}></View>
              <View style={styles.storyCard}></View>
              <View style={styles.storyCard}></View>

        </ScrollView>
        <ScrollView >
          {/* Posts will go here */}
          <View style={styles.postCard}>
            <View style={styles.authorContainer}>
              <Image style={styles.authorProfilePicture} />
              <Text>Author Name</Text>
            </View>
            <View style = {styles.postContent}>
              <Text>Year End Party 🧧</Text>
              <Text>Join us for a night of fun and celebration!</Text>
              {/* <TouchableOpacity>See more</TouchableOpacity> */}
            </View>
            <Image source={{uri:"https://picsum.photos/800/400"}}
                style = {styles.contentImage}
            />
            <View style ={styles.postActions}>
              {/* <Text>Like   Comment   Share</Text> */}
              <View style={styles.actionsContainer}>
                <EvilIcons name="like" size={30} color="#464646dd"/>
                <EvilIcons name="comment" size={30} color="#464646dd" />
                <EvilIcons name="share-apple" size={30} color="#464646dd" />
              </View>
              
              <View style={styles.reactionIconsContainer}>
                <Image 
                  source={require('../assets/images/facebook-reaction-like.svg')} 
                  style={styles.reactionIcon} />
                <Image 
                  source={require('../assets/images/facebook-reaction-love.svg')} 
                  style={styles.reactionIcon} />
              </View>
            </View>
          </View>
                <View style={styles.postCard}>
            <View style={styles.authorContainer}>
              <Image style={styles.authorProfilePicture} />
              <Text>Author Name</Text>
            </View>
            <View style = {styles.postContent}>
              <Text>Year End Party 🧧</Text>
              <Text>Join us for a night of fun and celebration!</Text>
              {/* <TouchableOpacity>See more</TouchableOpacity> */}
            </View>
            <Image source={{uri:"https://picsum.photos/800/400"}}
                style = {styles.contentImage}
            />
            <View style ={styles.postActions}>
              {/* <Text>Like   Comment   Share</Text> */}
              <View style={styles.actionsContainer}>
                <EvilIcons name="like" size={30} color="#464646dd"/>
                <EvilIcons name="comment" size={30} color="#464646dd" />
                <EvilIcons name="share-apple" size={30} color="#464646dd" />
              </View>
              
              <View style={styles.reactionIconsContainer}>
                <Image 
                  source={require('../assets/images/facebook-reaction-like.svg')} 
                  style={styles.reactionIcon} />
                <Image 
                  source={require('../assets/images/facebook-reaction-love.svg')} 
                  style={styles.reactionIcon} />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // color: '#533636ff',
    backgroundColor: '#ffffff',
  },
  postInputContainer: {
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    padding:16,

  },
  image: {
    width:40,
    height:40,
    backgroundColor:'#000000',
    borderRadius:50,
    borderColor:'#bbbbbbff',
    borderWidth:1,
  },
  input: {
    height: 40,
   
    padding: 10,
    flex:1,
    borderRadius:20,
  },
  storyContainer:{
    padding:5,
    marginBottom:5,
  },
  storyCard:{
    width:120,
    height:200,
    backgroundColor:'#bcbcbcff',
    marginRight:5,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#bbbbbbff',
  },
  postCard:{
    width:'100%',
    // height:"100%",
    borderTopWidth:2,
    // borderBottomWidth:2,
    borderColor:'#a3a3a3ff',
  },
  authorContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    padding:10,
  },
  authorProfilePicture:{
    width:40,
    height:40,
    backgroundColor:'#b5b5b5ff',
    borderRadius:50,
    borderColor:'#bbbbbbff',
    borderWidth:1,
  },
  postContent:{
    paddingHorizontal:10,
  },
  contentImage:{
    width:'100%',
    height:500,
    // flex:1,
    resizeMode:'cover',
    marginTop:10,
  },
  postActions:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  actionsContainer:{
    flexDirection:'row',
    gap:15,
  },
  reactionIconsContainer:{
    flexDirection:'row',
  },
  reactionIcon:{
    width:20,
    height:20,
    borderRadius:10,
    borderColor:'#9e9e9eff',
    borderWidth:1,
    marginRight:-5,
  },
});
