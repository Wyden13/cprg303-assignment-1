import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PostCard = ({
  author,
  content,
  imageUrl,
  avatarUri,
}: {
  author: string;
  content: string;
  imageUrl?: string;
  avatarUri: string;
}) => {
  return (
    <View style={styles.postCard}>
      <View style={styles.authorContainer}>
        <Image
          style={styles.authorProfilePicture}
          source={{ uri: avatarUri }}
        />
        <Text>{author}</Text>
      </View>
      <View style={styles.postContent}>
        <Text>{content}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.contentImage} />
      <View style={styles.postActions}>
        <View style={styles.actionsContainer}>
          <EvilIcons name="like" size={30} color="#464646dd" />
          <EvilIcons name="comment" size={30} color="#464646dd" />
          <EvilIcons name="share-apple" size={30} color="#464646dd" />
        </View>

        <View style={styles.reactionIconsContainer}>
          <Image
            source={require("../assets/images/facebook-reaction-like.svg")}
            style={styles.reactionIcon}
          />
          <Image
            source={require("../assets/images/facebook-reaction-love.svg")}
            style={styles.reactionIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default PostCard;
const styles = StyleSheet.create({
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
});
