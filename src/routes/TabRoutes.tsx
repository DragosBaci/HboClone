import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC, ReactNode } from 'react';
import SerieScreen from '../screens/SerieScreen/SerieScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieScreen from '../screens/MovieScreen/MovieScreen';
import { RouterKey } from './Routes';
import { useTabNavigation } from '../hooks/useTabNavigation';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { tabBarOptions, tabBarStyle } from '../utils/TabBarOptions';
import { Colors } from '../utils/Colors';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: FC = () => {
    const { currentTabIndex, setCurrentTab } = useTabNavigation();

    const handleTabPress = (index: number) => {
        setCurrentTab(index, currentTabIndex);
    };

    const renderTabBarIcon = (name: string, size: number, focused: boolean) => (
        <Icon name={name} size={size} color={focused ? Colors.white : Colors.darkGrey} />
    );


    return (
        <Navigator
            screenOptions={{ ...tabBarOptions, tabBarStyle }}
            initialRouteName={RouterKey.HOME_SCREEN}
        >
            <Screen
                name={"Home"}
                component={HomeScreen}
                listeners={{
                    tabPress: () => handleTabPress(0),
                }}
                options={{
                    tabBarIcon: ({ size, focused }) =>
                        renderTabBarIcon('home', size, focused),
                }}
            />
            <Screen
                name="Movies"
                component={MovieScreen}
                listeners={{
                    tabPress: () => handleTabPress(1),
                }}
                options={{
                    tabBarIcon: ({ size, focused }) =>
                        renderTabBarIcon('camera', size, focused),
                }}
            />
            <Screen
                name="Series"
                component={SerieScreen}
                listeners={{
                    tabPress: () => handleTabPress(2),
                }}
                options={{
                    tabBarIcon: ({ size, focused }) =>
                        renderTabBarIcon('calendar', size, focused),
                }}
            />
            <Screen
                name="Search"
                component={SearchScreen}
                listeners={{
                    tabPress: () => handleTabPress(3),
                }}
                options={{
                    tabBarIcon: ({ size, focused }) =>
                        renderTabBarIcon('search', size, focused),
                }}
            />
        </Navigator>
    );
};

export default TabRoutes;