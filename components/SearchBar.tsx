import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string
  onPress?: () => void
}


const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full" style={{paddingHorizontal: 20, paddingVertical: 16}}>
    <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
    <TextInput 
      onPress={onPress}
      placeholder={placeholder}       
      placeholderTextColor="#a8b5db"
      onChangeText={(text) => {
        console.log(text)
      }}
      className='flex-1 ml-2 text-white'
    />
   </View>
  )
}

export default SearchBar
