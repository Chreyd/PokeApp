import React, { useState } from 'react';
import {
  Button,
  FlatList,
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ListPokeOriginal } from '../../data/PokemonList';
import { Pokemon } from '../../models/Pokemon';
import * as Style from '../../utils/Style';


const HomeView = () => {

  const [counterPokedex, setCounterPokedex] = useState(0);
  const [listPoke, setListPoke] = useState(ListPokeOriginal);

  const getNamesPokemon= (namePoke:string)=>{
    
  } 

  const modifiLevel= ()=>{
    let newArray = [...listPoke];
    listPoke[counterPokedex].level = listPoke[counterPokedex].level + 5;
    setListPoke(newArray);
  }

    const onNext= ()=>{
      if(counterPokedex === ListPokeOriginal.length -1){
        setCounterPokedex(0);
      }
      else{
        setCounterPokedex(counterPokedex + 1);
      }

    }

    const onPrev= ()=>{
      if (counterPokedex === 0) {
        setCounterPokedex(ListPokeOriginal.length -1 );
      } else {
        setCounterPokedex(counterPokedex - 1);
      }
    }
 
  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}> 
        <Text style={styles.text_title}>Le Monde des Pokemon</Text>
      </View>
      <View style={styles.pokemon_container}>
        <PokeInfo name={ListPokeOriginal[counterPokedex].name} id= {ListPokeOriginal[counterPokedex].id} level={ListPokeOriginal[counterPokedex].level} isMale={ListPokeOriginal[counterPokedex].isMale}  source={ListPokeOriginal[counterPokedex].src} onClickPokemon={modifiLevel} />
      </View>      
      <View style={styles.button_container}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => onPrev()}
        >
          <Image source={require('../../assets/icons/right-arrow.png')} style={styles.icons_button}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onNext()}
        >
          <Image source={require('../../assets/icons/right-arrow.png')} style={styles.icons_button}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};



const PokeInfo= ({name, level, isMale, source, onClickPokemon}: Pokemon)=>{


  return (
    <>
      <Text style={styles.text_appeared}>Nouveau pokemon est présent</Text>

      <TouchableOpacity
        onPress={()=>onClickPokemon()}
      >
        <Image source={source} style={styles.imagePoke}/>
      </TouchableOpacity>
      <Text>
          Ce Pokemon est: {name} de niveau {level} 
      </Text>
      {isMale ?
      <Text> et c'eest un male</Text> : <Text> et c'est une femelle</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  main_container:{
    flex: 1,
  },
  title_container:{
    flex: 1,
    alignItems: 'center',
  },
  pokemon_container: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text_title:{
    marginTop:40,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff0000'
  },
  text_appeared:{
    marginBottom:40,
  },
  imagePoke:{
    width: 200,
    height: 200,
  },
  icons_button:{
    width: 40,
    height: 40
  },
  // @ts-ignore
  button:{
    ...Style.Elevation_button,
    ...Style.Rounded_button
  },
 
})

export default HomeView;
