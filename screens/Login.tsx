import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { Text, View, Pressable } from '../components/Themed'
import { auth } from '../firebase'
import { useEffect } from 'react'

export default function Login ({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [pwd, onChangePwd] = React.useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('App')
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, pwd).then((userCredentials) => {
      const user = userCredentials.user
      console.log('=== user ===>', user)
    }).catch((err) => alert(err.message))
  }

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, pwd).then((userCredentials) => {
      alert('logged in')
      // const user = userCredentials.user
      // console.log('=== user ===>', user)
    }).catch((err) => alert(err.message))
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={email} />
      <TextInput
        style={styles.input}
        onChangeText={onChangePwd}
        secureTextEntry
        placeholder="Password"
        value={pwd} />
      <Pressable
        onPress={handleSignIn}>
        <Text center>Login</Text>
      </Pressable>
      <Pressable
        secondary
        onPress={handleSignUp}>
        <Text dark bold center>Register</Text>
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
  input: {
    padding: 10,
    width: '90%',
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10
  }
})
