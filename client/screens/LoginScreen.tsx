import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Link href={"/(home)/Home"} >test</Link>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})