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


const TestView = () => {
 
  return (
    <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    }}>
        <View style={{width: 50, height: 50,backgroundColor:'powderblue'}}></View>
        <View style={{width: 50, height: 50,backgroundColor:'skyblue'}}></View>
        <View style={{width: 50, height: 50,backgroundColor:'steelblue'}}></View>
    </View>
  );
};


const styles = StyleSheet.create({
  text_title:{
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff0000'
  },
  imagePoke:{
    width: 200,
    height: 200,
  }
})

export default TestView;
