import { Text, View } from 'react-native'
import Animated, {SlideInDown, BounceOutDown} from 'react-native-reanimated'
import {MaterialIcons} from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '@/theme'
import { Button } from '../Button'

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({onClear, onSearch, quantity}: Props) {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredients selecionados</Text>
        <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>
      </View>

      <Button title="Find" onPress={onSearch}/>
    </Animated.View>
  )
}
