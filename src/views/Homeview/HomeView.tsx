import React from 'react';
import {
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


const HomeView = () => {

    const name = 'Pikatchu';
    const level: number = 15;
    const isMale:boolean = true;
 
  return (
    <View>
      <PokeInfo name={name} level={level} isMale={isMale}  source={require('../../assets/pokemon_PNG146.png')}/>
      <PokeInfo name="Richu" level={147} isMale={isMale} source={require('../../assets/pokemon_PNG147.png')}/>
    </View>
  );
};

type PokeInfoType={
  name: string;
  level: number;
  isMale: boolean;
  source: any;
};

const PokeInfo= ({name, level, isMale, source}: PokeInfoType)=>{
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
