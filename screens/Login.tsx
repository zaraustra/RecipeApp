import React from "react"
import {TextInput, StyleSheet} from "react-native"

import {Text, View, Pressable} from "../components/Themed"
import {auth, db} from "../firebase"
import {collection, setDoc, doc} from "firebase/firestore"

export default function Login ({navigation}) {
  const [email, onChangeEmail] = React.useState("john@bob.com")
  const [pwd, onChangePwd] = React.useState("Password1")

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       navigation.replace('App')
  //     }
  //   })
  //
  //   return unsubscribe
  // }, [])

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, pwd).then(async (userCredentials) => {
      const user = userCredentials.user

      try {
        const usersRef = collection(db, "users")
        await setDoc(doc(usersRef, user!.uid), {email: user!.email})
        navigation.replace("App")
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }).catch((err) => alert(err.message))
  }

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, pwd).then(() => {
      navigation.replace("App")
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
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: 10,
    width: "90%",
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 10
  }
})
