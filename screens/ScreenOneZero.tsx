import React from "react"
import {StyleSheet} from "react-native"

import {Text, View, Pressable} from "../components/Themed"

const ScreenOneZero = () => {
  const openWishlistModal = () => {
    console.log("================ open modal ================")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlists</Text>

      <Pressable
        onPress={openWishlistModal}>
        <Text center bold>Add new Wishlist</Text>
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
  },
  pressable: {
    position: "absolute"
  }
})

export default ScreenOneZero
