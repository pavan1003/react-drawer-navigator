import * as React from 'react';
import {  StyleSheet,View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './drawercontent'
function inbox() {
  return (
    <View style={styles.container}>
      <Text>inbox Screen</Text>
    </View>
  );
}

function outbox() {
  return (
    <View style={styles.container}>
      <Text>outbox Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} drawerStyle={{backgroundColor:'white', labelStyle:'#4A00A0'}}>
      <Drawer.Screen name="inbox" component={inbox}/>
      <Drawer.Screen name="outbox" component={outbox}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    tintColor:'#4A00A0',
    height:20,
    width: 25,
    
  }
});
