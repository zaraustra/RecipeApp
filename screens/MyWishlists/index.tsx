import React, {useState, useEffect} from "react"
import {StyleSheet} from "react-native"

import {Text, View, Pressable} from "../../components/Themed"
import {fixToBottom} from "../../components/styles"
import WishlistService from "../../firebase/services/Wishlist"

const MyWishlists = () => {
  const [myWishlists, setMyWishlists] = useState<{uid: string, name: string}[]>([])

  useEffect(() => {
    setMyWishlists([{uid: "asdasd", name: "My fake wishlist"}])
  }, [])

  const addWishlist = () => {
    WishlistService.create()
  }

  return (
    <View style={styles.container}>
      {myWishlists.map((wishlist) => (
        <View key={wishlist.uid}>
          <Text>{wishlist.uid}: {wishlist.name}</Text>
        </View>
      ))}

      <View style={styles.fixToBottom}>
        <Pressable onPress={addWishlist}>
          <Text center bold>Add new Wishlist</Text>
        </Pressable>
      </View>
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
  fixToBottom
})

export default MyWishlists
