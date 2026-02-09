import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PostCard from "./postcard";

const storiesData = [
  {
    id: 1,
    username: "John Doe",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2026/01/21/11/29/11-29-50-754_1280.jpg",
    },
    storyImage: {
      uri: "https://cdn.pixabay.com/photo/2026/01/21/11/29/11-29-50-754_1280.jpg",
    },
    hasViewed: false,
  },
  {
    id: 2,
    username: "Jane Smith",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2022/03/31/00/31/music-7101987_1280.jpg",
    },
    storyImage: {
      uri: "https://cdn.pixabay.com/photo/2022/03/31/00/31/music-7101987_1280.jpg",
    },
    hasViewed: true,
  },
  {
    id: 3,
    username: "Mike Johnson",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2025/07/16/18/50/hike-9718263_1280.jpg",
    },
    storyImage: {
      uri: "https://cdn.pixabay.com/photo/2025/07/16/18/50/hike-9718263_1280.jpg",
    },
    hasViewed: false,
  },
  {
    id: 4,
    username: "Emily Davis",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2025/10/24/03/17/tranquil-scene-9913086_1280.jpg",
    },
    storyImage: {
      uri: "https://cdn.pixabay.com/photo/2025/10/24/03/17/tranquil-scene-9913086_1280.jpg",
    },
    hasViewed: true,
  },
  {
    id: 5,
    username: "David Wilson",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2026/01/21/11/29/11-29-50-754_1280.jpg",
    },
    storyImage: {
      uri: "https://cdn.pixabay.com/photo/2025/02/19/13/25/woman-9417814_1280.jpg",
    },
    hasViewed: false,
  },
];

const postsData = [
  {
    id: 1,
    author: "John Doe",
    content: "Hello World!",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2026/01/21/11/29/11-29-50-754_1280.jpg",
    },
    imageUrl: "https://picsum.photos/id/14/800/400",
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "Beautiful day at the park!",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2022/03/31/00/31/music-7101987_1280.jpg",
    },
    imageUrl: "https://picsum.photos/id/15/800/400",
  },
  {
    id: 3,
    author: "Alice Johnson",
    content: "Had a great time at the concert!",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2025/07/16/18/50/hike-9718263_1280.jpg",
    },
    imageUrl: "https://picsum.photos/id/17/800/400",
  },
  {
    id: 4,
    author: "Bob Brown",
    content: "Just finished a great book!",
    avatar: {
      uri: "https://cdn.pixabay.com/photo/2025/10/24/03/17/tranquil-scene-9913086_1280.jpg",
    },
    imageUrl: "https://picsum.photos/id/18/800/400",
  },
];
const MainPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.postInputContainer}>
          <Image
            source={require("../assets/images/noprofile.png")}
            style={styles.image}
          />
          <TextInput style={styles.input} placeholder="What's on your mind?" />
          <FontAwesome name="file-picture-o" size={24} color="#4c4c4cff" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storyContainer}
          contentContainerStyle={styles.storyContentContainer}
        >
          <View style={styles.storyCard}>
            <Image
              source={require("../assets/images/noprofile.png")}
              style={styles.storyImage}
            />
            <View style={styles.addStoryButton}>
              <Text style={styles.addStoryIcon}>+</Text>
            </View>
            <Text style={styles.storyText}>Your Story</Text>
          </View>

          {/* Other Stories */}
          {storiesData.map((story) => (
            <View key={story.id} style={styles.storyCard}>
              {/* Story Background Image */}
              <Image source={story.storyImage} style={styles.storyImage} />

              {/* Border (blue for unviewed, gray for viewed) */}
              <View
                style={[
                  styles.storyBorder,
                  { borderColor: story.hasViewed ? "#C4C4C4" : "#4267B2" },
                ]}
              />

              {/* Avatar */}
              <View
                style={[
                  styles.storyAvatar,
                  { borderColor: story.hasViewed ? "#C4C4C4" : "#4267B2" },
                ]}
              >
                <Image source={story.avatar} style={styles.avatarImage} />
              </View>

              {/* Username */}
              <Text style={styles.storyText}>{story.username}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView>
          {/* Posts will go here */}

          {postsData.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              content={post.content}
              avatarUri={post.avatar.uri}
              imageUrl={post.imageUrl}
            />
          ))}
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
    backgroundColor: "#ffffff",
  },
  postInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 16,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 50,
    borderColor: "#bbbbbbff",
    borderWidth: 1,
  },
  input: {
    height: 40,

    padding: 10,
    flex: 1,
    borderRadius: 20,
  },
  storyContainer: {
    padding: 5,
    marginBottom: 5,
  },
  storyCard: {
    width: 120,
    height: 200,
    backgroundColor: "#bcbcbcff",
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bbbbbbff",
  },
  postCard: {
    width: "100%",
    // height:"100%",
    borderTopWidth: 2,
    // borderBottomWidth:2,
    borderColor: "#a3a3a3ff",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  authorProfilePicture: {
    width: 40,
    height: 40,
    backgroundColor: "#b5b5b5ff",
    borderRadius: 50,
    borderColor: "#bbbbbbff",
    borderWidth: 1,
  },
  postContent: {
    paddingHorizontal: 10,
  },
  contentImage: {
    width: "100%",
    height: 500,
    // flex:1,
    resizeMode: "cover",
    marginTop: 10,
  },
  postActions: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  reactionIconsContainer: {
    flexDirection: "row",
  },
  reactionIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#9e9e9eff",
    borderWidth: 1,
    marginRight: -5,
  },
  //  storyContainer: {
  //   paddingVertical: 10,
  // },
  storyContentContainer: {
    paddingHorizontal: 10,
    gap: 8,
  },
  // storyCard: {
  //   width: 110,
  //   height: 180,
  //   borderRadius: 12,
  //   overflow: 'hidden',
  //   marginRight: 8,
  //   position: 'relative',
  // },
  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  storyBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#4267B2", // FB blue for active stories
  },
  storyAvatar: {
    position: "absolute",
    top: 8,
    left: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#4267B2",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  addStoryButton: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    marginLeft: -18,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4267B2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  addStoryIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  storyText: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
