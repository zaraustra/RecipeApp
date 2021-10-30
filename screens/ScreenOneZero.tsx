import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View, Pressable } from '../components/Themed'
import { auth } from '../firebase'

export default function ScreenOneZero ({ navigation }) {
  const logout = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  email: {
    margin: 20
  }
})
