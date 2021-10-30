/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react'
import {
  Text as DefaultText,
  View as DefaultView,
  Pressable as DefaultPressable
} from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

export function useThemeColor (
  props: { light?: string, dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props'] & {
  dark?: boolean
  bold?: boolean
  center?: boolean
}
export type ViewProps = ThemeProps & DefaultView['props']
export type PressableProps = ThemeProps & DefaultPressable['props'] & {
  secondary?: boolean
}

export function Text (props: TextProps) {
  const { dark, bold, style, center, lightColor, darkColor, ...otherProps } = props
  return <DefaultText style={[
    style,
    { color: dark ? 'black' : useThemeColor({ light: lightColor, dark: darkColor }, 'text') },
    { fontWeight: bold ? 'bold' : 'normal' },
    { textAlign: center ? 'center' : undefined }
  ]} {...otherProps} />
}

export function View (props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function Pressable (props: PressableProps) {
  const { secondary, lightColor, darkColor, ...otherProps } = props
  const style = {
    padding: 20,
    width: '90%',
    backgroundColor: secondary ? 'white' : 'purple',
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10
  }

  return <DefaultPressable style={style} {...otherProps} />
}
