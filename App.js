import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {colors} from './src/utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';



const WEB_CLIENT_ID =
  '206955833315-nb85c0q1ii1rr6rmr9nqmr7v43n3erg2.apps.googleusercontent.com';
const IOS_CLIENT_ID =
  '206955833315-fcrpv6fhejl72v0vfcssa103sgerusji.apps.googleusercontent.com';
const REVERSED_CLIENT_ID =
  'com.googleusercontent.apps.206955833315-fcrpv6fhejl72v0vfcssa103sgerusji';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions = {({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === "Home") {
            icon = focused 
            ? require('./src/assets/tabs/home-active.png')
            : require('./src/assets/tabs/home.png');
          } else if (route.name === "Favorites") {
            icon = focused 
            ? require('./src/assets/tabs/Favorites-active.png')
            : require('./src/assets/tabs/Favorites.png');
          } else if (route.name === "Profile") {
            icon = focused 
            ? require('./src/assets/tabs/Profile-active.png')
            : require('./src/assets/tabs/Profile.png');
          }
          return <Image style={{width: 24, height: 24}} source={icon} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGrey}
      })}>
    
    
    

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  // useEffect(() =>{
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     WebClientId: WEB_CLIENT_ID,
  //     offlineAccess: true,
  //     iosClientId: IOS_CLIENT_ID
  //   })})
  const isSignedIn = true;
  const theme = {
    colors: {
      background: colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
