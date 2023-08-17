/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
 import { StyleSheet, View, Text } from 'react-native';
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
 
const App = () => {
   return (
     <NavigationContainer>
       <Navigator  />
        {/* <Text> Esta es una App</Text> */}
     </NavigationContainer>
   )
 }
 

  export default App