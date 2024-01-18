import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {

};

export const Pagina2Screen = ({navigation}:Props) => {

  useEffect(()=>{
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    });
  },[]);

  return (
    <View style={styles.globalMargin}>
      <Text style = {styles.title}>
        pagina 2
      </Text>
      <Button
        title='Ir a página 3'
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  )
}
