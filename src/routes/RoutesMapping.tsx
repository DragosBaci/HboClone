import React from "react";
import { RouterKey } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import SerieScreen from "../screens/SerieScreen/SerieScreen";
import TabRoutes from "./TabRoutes";

const { Navigator, Screen } = createStackNavigator();

const tabBarOptions = {
    headerShown: false,
};

const RoutesMapping = () => {
    return (
        <Navigator screenOptions={tabBarOptions} initialRouteName={RouterKey.TAB_ROUTES}>
            <Screen name={RouterKey.TAB_ROUTES} component={TabRoutes} />
            <Screen name={RouterKey.HOME_SCREEN} component={HomeScreen} />
            <Screen name={RouterKey.MOVIE_SCREEN} component={MovieScreen} />
            <Screen name={RouterKey.SERIE_SCREEN} component={SerieScreen} />
            <Screen name={RouterKey.SEARCH_SCREEN} component={SerieScreen}/>
        </Navigator>
    );
};

export default RoutesMapping;
