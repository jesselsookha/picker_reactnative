import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

function App(){
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Picker Example</Text>
      <Picker
        style={styles.pickers}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label='C#' value='csharp' />
      </Picker>
      <Text style={styles.nText}>{selectedLanguage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    padding: 10,
    alignItems: 'center',
  },
  heading:{
    fontSize: 32,
    fontWeight: 'bold',
  },
  pickers:{
    height: 100,
    width: 150,
    fontSize: 32,
  },
  nText:{
    fontSize: 48,
    fontWeight: 'bold',
  }

});

export default App;
