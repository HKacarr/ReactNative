/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import StateComponent from './Components/StateComponent';
import PropTypeComponent from './Components/PropTypeComponent';

function App(): JSX.Element {
  return (
    <View style={{marginTop: 100}}>
      <View style={[styles.componentMargin]}>
        <FirstComponent
          username={'Hasan Kacar'}
          text={'Welcome to React-Native'}
        />
      </View>
      <View style={[styles.componentMargin]}>
        <SecondComponent style={[styles.componentMargin]} />
      </View>
      <View style={[styles.componentMargin]}>
        <StateComponent style={[styles.componentMargin]} />
      </View>

      <SafeAreaView style={[styles.componentMargin]}>
        <PropTypeComponent
          name={'PropTypes Required Name Content'}
          age={24}
          // school={'Pamukkale University'}
          style={[styles.componentMargin]}
        />
      </SafeAreaView>
    </View>
    // <View style={[{flex: 1}]}>
    //   <View
    //     style={{
    //       flex: 1,
    //       flexDirection: 'row',
    //       alignItems: 'flex-start',
    //     }}>
    //     <View style={[styles.first_text, {backgroundColor: 'yellow'}]} />
    //   </View>
    //
    //   <View
    //     style={{
    //       flex: 1,
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //     }}>
    //     <View style={[styles.first_text, {backgroundColor: 'blue'}]} />
    //   </View>
    //
    //   <View
    //     style={{
    //       flex: 1,
    //       flexDirection: 'row',
    //       alignItems: 'flex-end',
    //     }}>
    //     <View style={[styles.first_text, {backgroundColor: 'brown'}]} />
    //   </View>
    // </View>

    // <View style={styles.main_view_margin}>
    //
    //   {/*<View>*/}
    //   {/*  <View style={[styles.every_box_margin, {flexDirection: 'row', justifyContent: 'flex-start'}]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'blue'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View>*/}
    //   {/*  <View style={[styles.every_box_margin, {flexDirection: 'row', justifyContent: 'flex-end'}]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'red'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View>*/}
    //   {/*  <View style={[styles.every_box_margin, {flexDirection: 'row', justifyContent: 'space-between'}]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'yellow'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'orange'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View>*/}
    //   {/*  <View style={[styles.every_box_margin,{flexDirection: 'row', justifyContent: 'space-around'}]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'yellow'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'orange'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View>*/}
    //   {/*  <View*/}
    //   {/*    style={[*/}
    //   {/*      styles.every_box_margin,*/}
    //   {/*      {flexDirection: 'row', flexWrap: 'nowrap'},*/}
    //   {/*    ]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'pink'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'brown'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'black'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'red'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'purple'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'grey'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View>*/}
    //   {/*  <View*/}
    //   {/*    style={[*/}
    //   {/*      styles.every_box_margin,*/}
    //   {/*      {flexDirection: 'row', flexWrap: 'wrap'},*/}
    //   {/*    ]}>*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'pink'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'brown'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'black'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'red'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'purple'}]} />*/}
    //   {/*    <View style={[styles.first_text, {backgroundColor: 'grey'}]} />*/}
    //   {/*  </View>*/}
    //   {/*</View>*/}
    //
    //   {/*<View style={{flexDirection: 'row', flex: 1}}>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'black'}]}/>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'orange'}]}/>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'brown'}]}/>*/}
    //   {/*</View>*/}
    //
    //   {/*<View style={{flexDirection: 'row-reverse', flex: 1}}>/!* row-reverse tersine çevirir *!/*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'green'}]}/> */}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'blue'}]}/>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'yellow'}]}/>*/}
    //   {/*</View>*/}
    //
    //   {/*<View style={{flexDirection: 'row', flex: 2}}>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'black'}]}/>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'orange'}]}/>*/}
    //   {/*  <View style={[styles.first_text, {backgroundColor: 'brown'}]}/>*/}
    //   {/*</View>*/}
    // </View>
  );
}

const styles = StyleSheet.create({
  first_text: {
    width: 100,
    height: 100,
  },
  main_view_margin: {
    marginTop: 50,
  },
  every_box_margin: {
    marginTop: 30,
  },
  componentMargin: {
    marginTop: 50,
  },
});
export default App;
