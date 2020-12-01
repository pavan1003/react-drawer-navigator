import * as React from 'react';
import {  StyleSheet,View} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { MaterialIcons,FontAwesome,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons'; 

export function DrawerContent(props){
    return(
        <DrawerContentScrollView style={styles.DrawerContent}>
            <View>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.subtext}>subtext</Text>
            </View>
            <Drawer.Section style={styles.section}>
            <DrawerItem 
                icon={() => (<FontAwesome name="envelope" size={22} color="grey" />)}
                activeBackgroundColor='#4A00A0'
                labelStyle={{color: 'black'}}
                label="Inbox"
                onPress={() => {props.navigation.navigate('inbox')}}
            />
            <DrawerItem 
                icon={() => (<MaterialIcons name="send" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Outbox"
                onPress={() => {props.navigation.navigate('outbox')}}
            />
            <DrawerItem 
                icon={() => (<FontAwesome name="heart" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Favorites"
                onPress={() => {}}
            />
            <DrawerItem 
                icon={() => (<MaterialIcons name="archive" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Archive"
                onPress={() => {}}
            />
            <DrawerItem 
                icon={() => (<FontAwesome5 name="trash" size={22} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Trash"
                onPress={() => {}}
            />
            <DrawerItem
                icon={() => (<MaterialCommunityIcons name="alert-octagon" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Spam"
                onPress={() => {}}
            />
            </Drawer.Section>
            <View><Text style={styles.subtext}>Labels</Text></View>
            <Drawer.Section>
                <DrawerItem 
                icon={() => (<FontAwesome name="bookmark" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Family"
                onPress={() => {}}
                />
                <DrawerItem 
                icon={() => (<FontAwesome name="bookmark" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Friends"
                onPress={() => {}}
                />
                <DrawerItem 
                icon={() => (<FontAwesome name="bookmark" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Work"
                onPress={() => {}}
                />
            </Drawer.Section>
            <Drawer.Section>
            <DrawerItem 
                icon={() => (<MaterialIcons name="settings" size={25} color="grey" />)}
                labelStyle={{color: 'black'}}
                label="Settings & account"
                onPress={() => {}}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    subtext:{
        marginLeft: 12,
        color:'grey'        
        
    },
    drawerContent : {
        flex : 1,
    },
    title : {
       fontSize:25,
       marginLeft: 11,
    },
    section: {
        flex:1,
        flexDirection: 'column',
        alignContent:'flex-start',        
    },
})