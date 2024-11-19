import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, SectionList, Button, Image} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// EXERCISE 1
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: "left"
//   }
// });
//
//
// const datasource = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
//   {key: 'm'},
//   {key: 'n'},
//   {key: 'o'},
//   {key: 'p'},
//   {key: 'q'},
//   {key: 'r'},
//   {key: 's'},
//   {key: 't'},
//   {key: 'u'},
//   {key: 'v'},
//   {key: 'w'},
//   {key: 'x'},
//   {key: 'y'},
//   {key: 'z'}
// ];
//
//
// const renderItem = ({item=datasource}) => {
//
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{marginBotton: 20}}>
//         <FlatList data={datasource} renderItem={renderItem} />
//       </View>
//   );
// };
//
// export default App;


// EXERCISE 2
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: "left"
//   },
//   headerText: {
//     fontSize: 23,
//     margin: 10,
//     textAlign: "center",
//     fontWeight: "bold"
//   }
// });
//
// const datasource = [
//   {data:[
//       {key: 'a'},
//       {key: 'e'},
//       {key: 'i'},
//       {key: 'o'},
//       {key: 'u'},
//     ],
//     title:"Vowels", bgColor: "lightskyblue"},
//   {data:[
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//     ],
//     title:"Consonants", bgColor: "khaki"}
// ];
//
//
// const renderItem = ({item=datasource}) => {
//
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{marginBotton: 20, marginHorizontal: 12, marginTop: 40}}>
//         <SectionList sections={datasource} renderItem={renderItem}
//                      renderSectionHeader={({section:{title, bgColor}})=>(
//                          <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
//                      )}/>
//       </View>
//   );
// };
//
// export default App;


// EXERCISE 3

const styles = StyleSheet.create({
  boxPokemon: {
      borderWidth: 1,
      justifyContent: 'space-around',
      marginHorizontal: 20,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lavender',
      padding:'auto'
  },
  nameStyle: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  header: {
      fontSize: 23,
      marginTop: 20,
      marginHorizontal: 20,
      textAlign: "center",
      fontWeight: 'bold',
      borderWidth: 1,
      fontFamily: "HelveticaNeue-Bold"
  }
});

const datasource = [
  {data:[
      {key: 'Ivysaur', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_2.png'},
      {key: 'Weedle', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_13.png'},
    ],
    title:"Grass", clr: "yellowgreen", txtClr: "seagreen", icn: "grass"},
  {data:[
      {key: 'Psyduck', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54.png'},
      {key: 'Poliwag', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_60.png'},
    ],
    title:"Water", clr: "skyblue", txtClr: "slateblue", icn: "water-circle"}
];

const renderItem = ({item=datasource}) => {
  return (
      <View style={styles.boxPokemon}>
        <Text style={styles.nameStyle}>{item.key}</Text>
        <Image source={{uri: item.img}} style={[{width: 160, height: 230, margin: 15}]}/>
      </View>
  );
};

const App = () => {
  return (
      <View style={{marginTop: 44, marginBottom: 50}}>
        <Button title="Add Pokemon"></Button>
        <SectionList sections={datasource} renderItem={renderItem}
                             renderSectionHeader={({section:{title, clr, icn, txtClr}})=>(
                                 <Text style={[styles.header, {backgroundColor: clr, color: txtClr}]}>
                                     <Icon name={icn} size={25} color={txtClr} />
                                      {title}</Text>
                             )}/>
      </View>
  );
};

export default App;


