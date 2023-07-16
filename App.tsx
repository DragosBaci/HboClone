import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import { StatusBar, ScrollView, StyleSheet } from "react-native";
const App = () => {
  return (<ScrollView style={styles.rootScreen}>
    <StatusBar barStyle="light-content" />
    <HomeScreen></HomeScreen>
  </ScrollView>

  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "black"
  }
})