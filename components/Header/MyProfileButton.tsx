import React from "react"
import {Pressable} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

import Colors from "../../constants/Colors"
import useColorScheme from "../../hooks/useColorScheme"

const MyProfileButton = ({navigation}) => {
  const colorScheme = useColorScheme()
  return (
    <Pressable
      onPress={() => navigation.navigate("MyProfile")}
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
}

export default MyProfileButton
