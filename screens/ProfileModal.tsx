import React, {useEffect, useState} from "react"
import {StyleSheet} from "react-native"
import {doc, getDoc} from "firebase/firestore"

import {Pressable, Text, View} from "../components/Themed"
import {auth, db} from "../firebase"

export default function ProfileModal ({navigation}) {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const ref = doc(db, "users", auth.currentUser?.uid)
    const docSnap = await getDoc(ref)
    return setUser(docSnap.data())
  }

  const logout = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginStack")
    })
  }
  return (
    <View style={styles.container}>
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
