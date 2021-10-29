import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';


import { store } from "./store/store";
import FeedsScreen from './screens/feedsScreen'
import LoginScreen from './screens/loginScreen'
import ProfileScreen from './screens/profileScreen'
import { useAppSelector } from "./hooks";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 30, color: 'whitesmoke', fontFamily: 'BebasNeue' },
            tabBarStyle: { backgroundColor: 'darkorange', marginTop: StatusBar.currentHeight},
        }}
        >
            <Tab.Screen name="Feeds" component={ FeedsScreen } />
            <Tab.Screen name="Profile" component={ ProfileScreen } />
        </Tab.Navigator>
    );
}

function AppWrapper(){
    const { isLogin } = useAppSelector( state => state.login);
    const [loaded] = useFonts({
        BebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf'),
    });
    if(isLogin){
        return (
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        )
    }
    return (<LoginScreen />);
}

export default function App() {
  return (
      <Provider store={ store }>
          <AppWrapper/>
      </Provider>
  );
}
