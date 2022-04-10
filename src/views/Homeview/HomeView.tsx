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
import { listPoke } from '../../data/PokeList';
import { Pokemon } from '../../models/Pokemon';


const HomeView = () => {

    const name = 'Pikatchu';
    const level: number = 15;
    const isMale:boolean = true;

    const [counterPokedex, setCounterPokedex] = useState(0);

    const onNext= ()=>{
      setCounterPokedex(counterPokedex + 1);
    }

    const onPrev= ()=>{
      setCounterPokedex(counterPokedex - 1);
    }
 
  return (
    <View>
      <Text>Valeur du counterPokedex:{ counterPokedex}</Text>
      <Button
        title="Next"
        onPress={() => onNext()}
      />
        <Button
        title="Previous"
        onPress={() => onPrev()}
        color="#f194ff"
      />

      <FlatList
        data={listPoke}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> 
          <PokeInfo name={item.name} id= {item.id} level={item.level} isMale={item.isMale}  source={item.src} />
      }
      />
    </View>
  );
};



const PokeInfo= ({name, level, isMale, source}: Pokemon)=>{
  return (
    <View>
      <Text>Bonjour tout le monde. ceci est ma page HomeView</Text>
      <Text>
          Mon premier pokemon est: {name} de niveau {level} 
      </Text>
      {isMale ?
      <Text> et c'eest un male</Text> : <Text> et c'est une femelle</Text>}
      <Image source={source} style={styles.imagePoke}/>
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
