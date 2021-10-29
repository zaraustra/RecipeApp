import * as React from 'react'
import {Pressable, StyleSheet} from 'react-native'

import { Text, View } from '../components/Themed'
import {RootTabScreenProps} from "../types";

export default function ScreenTwoZero({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Pressable
        onPress={() => navigation.navigate('ScreenTwoOne')}
        style={pressableStyle}>
        <Text>Go to screen 2-1</Text>
      </Pressable>
    </View>
  )
}

const pressableStyle = ({ pressed }: {pressed: boolean}) => ({
  marginTop: 30,
  backgroundColor: "purple",
  borderRadius: 5,
  padding: 20,
  opacity: pressed ? 0.5 : 1,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
