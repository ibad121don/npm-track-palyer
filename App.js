import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SignupChoice from './src/Pages/SignupChoice/SignupChoice';
import signup from './src/Pages/Signup/signup';
import Signin from './src/Pages/Signin/Signin';
import ForgetPassword from './src/Pages/ForgetPassword/ForgetPassword';
import LoginAgain from './src/Pages/LoginAgain/LoginAgain';
import Home from './src/Pages/Home/Home';
import Profile from './src/Pages/Profile/Profile';
import PaymentMethod from './src/Pages/PaymentMetod/PaymentMethod';
import Song from './src/Pages/SongListHome/Song';
import StartWhereYouLift from './src/Pages/StartFromLIft/StartwhereYouLift';
import Booklisting from './src/Pages/Book Listing/BookListing';
import MaslikPlaylist from './src/Pages/MaslikPlaylist/MaslikPlaylist';
import BankPayment from './src/Pages/Bank Payment/BankPayment';
import Icon from 'react-native-vector-icons/AntDesign';
import About from './src/Pages/About/About';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView,DrawerItem, } from '@react-navigation/drawer';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Alert, Image } from 'react-native';

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerApp() {

  return (
  
    
      <Drawer.Navigator initialRouteName="Song" >


        <Drawer.Screen name="Song" component={Song} options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Icon name='home' size={size} color={focused ? 'orange' : 'blue'} />

          ),
        }} />
        <Drawer.Screen name="Profile" component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, size }) => (
            <Icon name='user' size={size} color={focused ? 'orange' : 'blue'} />

          ),
        }} />
        <Drawer.Screen name="About" component={About}
        options={{
          title: 'About',
          drawerIcon: ({ focused, size }) => (
            <Icon name='idcard' size={size} color={focused ? 'orange' : 'blue'} />

          ),
        }} />
        
      </Drawer.Navigator>


  


  );
}
const AuthStack = () => (

  <Navigator headerMode='none'>

    <Screen name='SignupChoice' component={SignupChoice} />
    <Screen name='signup' component={signup} />
    <Screen name='Signin' component={Signin} />
    <Screen name='Home' component={Home} />
    <Screen name='LoginAgain' component={LoginAgain} />
    <Screen name='ForgetPassword' component={ForgetPassword} />
    <Screen name='Profile' component={Profile} />
    <Screen name='PaymentMethod' component={PaymentMethod} />
    <Screen name='Song' component={DrawerApp} />
    <Screen name='StartWhereYouLift' component={StartWhereYouLift} />
    <Screen name='About' component={About} />
    <Screen name='MaslikPlaylist' component={MaslikPlaylist} />
    <Screen name='BankPayment' component={BankPayment} />
    <Screen name='Booklisting' component={Booklisting} />







  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;