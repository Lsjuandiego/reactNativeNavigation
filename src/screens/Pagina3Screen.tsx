import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>
        pagina 3
      </Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
      <Button
        title='Ir a la página 1'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
