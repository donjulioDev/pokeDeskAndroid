import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
   const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>
      <Image 
        source={ require('../assets/pokebola.png')} 
        style={ styles.pokebolaBG }
      />

    <View
      style={{
        //...styles.globalMargin,
        alignItems: 'center',
      }}
    >
      <FlatList 
          data={ simplePokemonList }
          keyExtractor={ pokemon => pokemon.id }
          showsVerticalScrollIndicator={false}
          numColumns={ 2 }
    // Header
          ListHeaderComponent={
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              marginBottom: top + 20,
              paddingBottom: 10,
            }}>Pokédex</Text> 
          }
        renderItem={ ({ item } ) =>  (<PokemonCard pokemon={item}  />  )}
          // infinite scroll
        onEndReached={ loadPokemons } //Se llama una vez cuando la posición de desplazamiento se encuentra dentro de onEndReachedThreshold del contenido renderizado.
  // Qué tan lejos del final (en unidades de longitud visible de la lista) debe estar el borde inferior de la lista desde el final del contenido para activar la onEndReached llamada onEndReached . Por lo tanto, un valor de 0.5 activará onEndReached cuando el final del contenido esté dentro de la mitad de la longitud visible de la lista.
        onEndReachedThreshold={ 0.5 }
        //initialNumToRender={40}
          ListFooterComponent={( 
          <ActivityIndicator
            style={{ height: 100 }}
            size={ 20 }
            color= "grey"
          />  )}
        />
    </View>

    </>
  )
}
