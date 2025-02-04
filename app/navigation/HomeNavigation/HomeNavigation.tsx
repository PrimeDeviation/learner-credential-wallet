import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { theme } from '../../styles';
import styles from './HomeNavigation.styles';
import {
  CredentialNavigation,
  ShareNavigation,
  AddCredentialNavigation,
  SettingsNavigation,
  HomeNavigationParamList,
  TabIconProps,
} from '../../navigation';

const Tab = createBottomTabNavigator<HomeNavigationParamList>();

const HomeTabIcon = ({ color }: TabIconProps) => <MaterialIcons name="home" color={color} size={theme.iconSize} />;
const ShareTabIcon = ({ color }: TabIconProps) => <MaterialIcons name="share" color={color} size={theme.iconSize} />;
const AddTabIcon = ({ color }: TabIconProps) => <MaterialIcons name="add-circle" color={color} size={theme.iconSize} />;
const SettingsTabIcon = ({ color }: TabIconProps) => <MaterialIcons name="settings" color={color} size={theme.iconSize} />;

const labelSuffix = Platform.OS === 'ios' ? ', tab' : '';

export default function HomeNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        unmountOnBlur: true, 
        tabBarStyle: styles.barStyle,
        tabBarActiveTintColor: theme.color.iconActive,
        tabBarInactiveTintColor: theme.color.iconInactive,
      }}
    >
      <Tab.Screen name="CredentialNavigation" component={CredentialNavigation} options={{
        title: 'My Wallet',
        tabBarIcon: HomeTabIcon,
        tabBarAccessibilityLabel: `My Wallet, (1 of 4)${labelSuffix}`,
      }}/>
      <Tab.Screen name="ShareNavigation" component={ShareNavigation} options={{
        title: 'Share',
        tabBarIcon: ShareTabIcon,
        tabBarAccessibilityLabel: `Share, (2 of 4)${labelSuffix}`,
      }}/>
      <Tab.Screen name="AddCredentialNavigation" component={AddCredentialNavigation} options={{
        title: 'Add',
        tabBarIcon: AddTabIcon,
        tabBarAccessibilityLabel: `Add, (3 of 4)${labelSuffix}`,
      }}/>
      <Tab.Screen name="SettingsNavigation" component={SettingsNavigation} options={{
        title: 'Settings',
        tabBarIcon: SettingsTabIcon,
        tabBarAccessibilityLabel: `Settings, (4 of 4)${labelSuffix}`,
      }}/>
    </Tab.Navigator>
  );
}
