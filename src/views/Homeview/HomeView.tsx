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


const HomeView = () => {

  const [counterPokedex, setCounterPokedex] = useState(0);
  const [listPoke, setlistPoke] = useState(ListPokeOriginal);

  const getNamesPokemon= (namePoke:string)=>{
    console.log(namePoke); 
  } 

  const modifiLevel= ()=>{
    let newArray = [...listPoke];//copying the old datas array 
    listPoke[counterPokedex].level = listPoke[counterPokedex].level + 5;
    setlistPoke(newArray);
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
    <View>
      <Text>Valeur du counterPokedex: est{ counterPokedex}</Text>
      <Button
        title="Next"
        onPress={() => onNext()}
      />
        <Button
        title="Previous"
        onPress={() => onPrev()}
        color="#f194ff"
      />
      <PokeInfo name={ListPokeOriginal[counterPokedex].name} id= {ListPokeOriginal[counterPokedex].id} level={ListPokeOriginal[counterPokedex].level} isMale={ListPokeOriginal[counterPokedex].isMale}  source={ListPokeOriginal[counterPokedex].src} onClickPokemon={modifiLevel} />

      {/* <FlatList
        data={listPoke}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> 
          <PokeInfo name={item.name} id= {item.id} level={item.level} isMale={item.isMale}  source={item.src} />
      }
      /> */}
    </View>
  );
};



const PokeInfo= ({name, level, isMale, source, onClickPokemon}: Pokemon)=>{


  return (
    <View>
      <Text>Bonjour tout le monde. ceci est ma page HomeView</Text>
      <Text>
          Mon premier pokemon est: {name} de niveau {level} 
      </Text>
      {isMale ?
      <Text> et c'eest un male</Text> : <Text> et c'est une femelle</Text>}
      <TouchableOpacity
        // style={styles.button}
        onPress={()=>onClickPokemon()}
      >
        <Image source={source} style={styles.imagePoke}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePoke:{
    width: 200,
    height: 200,
  }
})

export default HomeView;
