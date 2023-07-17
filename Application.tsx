import React from "react";
import { TabProvider } from "./src/context/TabContext";
import { NavigationContainer } from '@react-navigation/native';
import RoutesMapping from "./src/routes/RoutesMapping";
import { RootContainer } from "./Application.css";
import CardDetailScreen from "./src/screens/CardDetailScreen/CardDetailScreen";

const Application = () => {
  return (
    <TabProvider>
      <NavigationContainer>
        <RootContainer>
          <RoutesMapping />
        </RootContainer>
      </NavigationContainer>
    </TabProvider>
    
  );
};

export default Application;
