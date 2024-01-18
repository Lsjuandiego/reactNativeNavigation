import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<any, any> {

};

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        pagina 1
      </Text>
      <Button
        title='Ir a página 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>
        Navegar con argumentos
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })
        }}
      >
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  )
}
