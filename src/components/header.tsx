import { Text, View } from 'react-native'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  return (
    <View className="w-full h-28 items-row items-end bg-black px-8 pb-4 border border-white">
      <Text>{title}</Text>
    </View>
  )
}
