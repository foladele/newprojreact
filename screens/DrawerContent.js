import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Caption, Paragraph, TouchableRipple, Switch } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../Component/Context';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    // asses signOut from app,js
    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                 source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Faith Martin</Title>
                                <Caption  style={styles.caption}>@f_oladele</Caption>
                            </View>
                        </View>
                        <View  style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    {/* icons not working yet */}
                    <Drawer.Section>
                        <DrawerItem style={styles.bottomDrawerSection}
                            icon={({color, size}) =>{
                                <Icons>
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                </Icons>
                            }}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem style={styles.bottomDrawerSection}
                            icon={({color, size}) =>{
                                <Icons>
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                </Icons>
                            }}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem style={styles.bottomDrawerSection}
                            icon={({color, size}) =>{
                                <Icons>
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                </Icons>
                            }}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem style={styles.bottomDrawerSection}
                            icon={({color, size}) =>{
                                <Icons>
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                </Icons>
                            }}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem style={styles.bottomDrawerSection}
                            icon={({color, size}) =>{
                                <Icons>
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                </Icons>
                            }}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Prefrences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                               <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                               </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem style={styles.bottomDrawerSection}
                    icon={({color, size}) =>{
                        <Icons>
                            name="exit-to-app"
                            color={color}
                            size={size}
                        </Icons>
                    }}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                >
                </DrawerItem>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });