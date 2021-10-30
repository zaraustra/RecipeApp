import * as React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {RootStackParamList} from "../../types"
import NotFoundScreen from "../../screens/NotFoundScreen"
import ModalScreen from "../../screens/ModalScreen"
import LoginStack from "./Login"
import AppStack from "./App"

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
      <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootNavigator
