import * as React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ScreenTwoZero from "../../screens/ScreenTwoZero"
import ScreenTwoOne from "../../screens/ScreenTwoOne"
import {RootStackParamList} from "../../types"

const Stack = createNativeStackNavigator<RootStackParamList>()

function SecondTabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenTwoZero" component={ScreenTwoZero} options={{title: "2-0"}}/>
      <Stack.Screen name="ScreenTwoOne" component={ScreenTwoOne} options={{title: "2-1"}} />
    </Stack.Navigator>
  )
}

export default SecondTabNavigator
