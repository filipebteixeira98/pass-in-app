import { useState } from 'react'
import { View, Image, StatusBar, Alert } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import { colors } from '@/styles/colors'

export default function Register() {
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert('Enrollment', 'Fill in all the fields!')
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Full name" onChangeText={setName} />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>
        <Button title="Register" onPress={handleRegister} />
        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Already have a ticket?
        </Link>
      </View>
    </View>
  )
}
