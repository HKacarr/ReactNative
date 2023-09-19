/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';


import {
  SafeAreaView,
  Text, TouchableOpacity,
} from 'react-native';


import RBSheet from 'react-native-raw-bottom-sheet';

function App(): JSX.Element {

  const refRBSheet = useRef();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Text>Open Sheet</Text>
      </TouchableOpacity>

      <RBSheet
          ref={refRBSheet}
          height={300}
          openDuration={500}
          closeOnPressMask={false}
          customStyles={{
            // wrapper: {
            //   backgroundColor: "transparent"
            // },
            container: {
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D9D9D9"
            }
          }}
      >
        <Text>RBSheet Sample</Text>
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </RBSheet>
    </SafeAreaView>
  );
}

export default App;
