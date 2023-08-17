import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

 const windowWidth =  Dimensions.get("window").width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon}: Props) => {
  return (
    <TouchableOpacity 
      activeOpacity={ 0.9 }
    >
      <View style={{ 
        ...styles.cardContainer,
        width: windowWidth * 0.4
      }}>
        {/* Nombre del pokemon y ID */}
        <View>
            <Text style={ styles.name }>
              {pokemon.name}
              {'\n#' + pokemon.id }  
            </Text> 
        </View>
       <View style={ styles.pokeBolaContainer }>
          <Image  
            source={ require('../assets/pokebola-blanca.png') }
            style={ styles.pokebola }
            />
      </View> 
        <FadeInImage  
            uri={ pokemon.picture }
            style={ styles.pokemonImage }
        />
      </View>
    </TouchableOpacity>
  )
}

  const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#3761A8',
    width:160,
    height:120,
    marginBottom: 25,
    borderRadius: 20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  name: {
    fontSize: 20,
    color: '#fefefe',
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola:{
      width: 100,
      height: 100,
      position:'absolute',
      right: -20,
      bottom:-20

  },
  pokemonImage: {
    width: 100,
    height: 100,
    position:'absolute',
    right: -8,
    bottom: -5
  },
  pokeBolaContainer:{
    width: 100,
    height: 100,
     // backgroundColor: 'blue',
      position: 'absolute',
       bottom: 0,
       right: 0,
       overflow:'hidden',
       opacity: 0.5,  
  }

 });