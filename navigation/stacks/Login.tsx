import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {RootStackParamList} from "../../types"
import Login from "../../screens/Login"
import Register from "../../screens/Register"

const Stack = createNativeStackNavigator<RootStackParamList>()

function App () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default App
