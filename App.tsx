import React from "react";
import { View, StyleSheet } from "react-native";
import { TabProvider } from "./src/context/TabContext";
import { NavigationContainer } from '@react-navigation/native';
import RoutesMapping from "./src/routes/RoutesMapping";

const App = () => {
  return (
    <TabProvider>
      <NavigationContainer>
        <View style={styles.rootScreen}>
          <RoutesMapping />
        </View>
      </NavigationContainer>
    </TabProvider>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "black"
  }
});

export default App;
