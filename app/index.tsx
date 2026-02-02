import Header from "@/components/header";
import { Text, View } from "react-native";
import LandingPage from "@/components/landing-page";
import NavigationBar from "@/components/navigation-bar";
import MainPage from "@/components/main-page";

export default function Index() {
  return (
    <View>
      {/* <Text>Facebook Clone App</Text> */}
      <Header />
      <MainPage />
      <NavigationBar />
    </View>
  );
}
