import React from "react"

import {FontAwesome} from "@expo/vector-icons"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {TabStackParamList, RootTabScreenProps} from "../../types"
import useColorScheme from "../../hooks/useColorScheme"
import Colors from "../../constants/Colors"
import MyWishlists from "../../screens/MyWishlists"
import SecondTabNavigator from "./SecondTab"
import MyProfileButton from "../../components/Header/MyProfileButton"

const BottomTab = createBottomTabNavigator<TabStackParamList>()

function TabBarIcon (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"],
  color: string
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />
}

function App () {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="MyWishlists"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}>
      <BottomTab.Screen
        name="MyWishlists"
        component={MyWishlists}
        options={({navigation}: RootTabScreenProps<"MyWishlists">) => ({
          title: "My Wishlists",
          tabBarIcon: ({color}) => <TabBarIcon name="list" color={color} />,
          headerRight: () => <MyProfileButton navigation={navigation} />
        })}
      />
      <BottomTab.Screen
        name="SharedWithMe"
        component={SecondTabNavigator}
        options={{
          headerShown: false,
          title: "Shared With Me",
          tabBarIcon: ({color}) => <TabBarIcon name="users" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}

export default App
