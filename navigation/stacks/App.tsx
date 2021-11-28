import React from "react"
import {Pressable} from "react-native"

import {FontAwesome} from "@expo/vector-icons"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {TabStackParamList, RootTabScreenProps} from "../../types"
import useColorScheme from "../../hooks/useColorScheme"
import Colors from "../../constants/Colors"
import ScreenOneZero from "../../screens/ScreenOneZero"
import SecondTabNavigator from "./SecondTab"

const BottomTab = createBottomTabNavigator<TabStackParamList>()

function TabBarIcon (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
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
        component={ScreenOneZero}
        options={({navigation}: RootTabScreenProps<"MyWishlists">) => ({
          title: "My Wishlists",
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("ProfileModal")}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{marginRight: 15}}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SecondTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}

export default App
