/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  LoginStack: undefined
  Login: undefined
  Register: undefined
  App: NavigatorScreenParams<TabStackParamList> | undefined
  Modal: undefined
  NotFound: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type TabStackParamList = {
  TabOne: undefined
  TabTwo: undefined
  ScreenTwoOne: undefined
  ScreenTwoZero: undefined
}

export type RootTabScreenProps<Screen extends keyof TabStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
