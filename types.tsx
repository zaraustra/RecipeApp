import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TabStackParamList = {
  MyWishlists: undefined
  TabTwo: undefined
  ScreenTwoOne: undefined
  ScreenTwoZero: undefined
}

export type RootStackParamList = {
  LoginStack: undefined
  Login: undefined
  Register: undefined
  App: NavigatorScreenParams<TabStackParamList> | undefined
  ProfileModal: undefined
  NotFound: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type RootTabScreenProps<Screen extends keyof TabStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
