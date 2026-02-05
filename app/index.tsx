import Button from "@/components/button";
import Header from "@/components/header";
import MainPage from "@/components/main-page";
import NavigationBar from "@/components/navigation-bar";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Facebook Clone App</Text> */}
      <Header />
      <MainPage />
      <Button />
      <NavigationBar />
    </View>
  );
}
