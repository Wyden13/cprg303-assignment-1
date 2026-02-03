import { View, Text, StatusBar,StyleSheet } from "react-native";
const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
});

