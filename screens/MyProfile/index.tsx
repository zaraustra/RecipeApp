import React, {useEffect, useState} from "react"
import {StyleSheet} from "react-native"

import {Pressable, Text, View} from "../../components/Themed"
import {auth} from "../../firebase"
import UserService from "../../firebase/services/User"

interface Props {
  navigation: any // TODO investigate how to properly type this.
}

export default function MyProfile ({navigation}: Props) {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    UserService.get().then((user) => {
      console.log("=== user ===>", user)
      return setUser(user)
    })
  }, [])

  const logout = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginStack")
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.email}>ID: {user?.uid}</Text>
      <Text style={styles.email}>E-mail: {user?.email}</Text>
      <Pressable
        onPress={logout}>
        <Text center bold>Logout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
