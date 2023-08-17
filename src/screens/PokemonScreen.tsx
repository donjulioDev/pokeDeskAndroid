import { StyleSheet, View, Text } from 'react-native'

export const PokemonScreen = () => {
  return (
    <View style={ styles.container} >
      <Text>PokemonScreen</Text> 
    </View>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#9a3636',
   }
 });
