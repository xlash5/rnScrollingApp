import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';


const Card = ({ color }) => {
  return (
    <View style={{
      backgroundColor: color,
      height: 100,
      margin: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Card</Text>
    </View>
  );
};

const colors = [
  '#FF0000',
  '#FF7F00',
  '#FFFF00',
  '#00FF00',
  '#0000FF',
  '#4B0082',
  '#9400D3',
];

const App = () => {
  const scrollViewRef = useRef(null);
  //repeating colors 100 times
  const colorArray = Array(100).fill(colors).flat();

  const myCards = colorArray.map((color, index) => {
    return <Card key={index} color={color} />
  });

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ animated: true });
  };

  const startScrolling = async () => {
    //scroll to bottom first to see the effect of scrolling to top after 2 seconds delay
    for (let i = 0; i < 20; i++) {
      scrollToBottom();
      await new Promise(resolve => setTimeout(resolve, 1000));
      scrollToTop();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollViewRef}>
        {myCards}
      </ScrollView>
      <TouchableOpacity onPress={startScrolling}>
        <View style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: '#2196f3',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

