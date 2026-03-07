import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.square, { backgroundColor: '#7fd1e6' }]}>
        <Text>Square 1</Text>
      </View>

      <View style={[styles.square, { backgroundColor: '#5cc3b8' }]}>
        <Text>Square 2</Text>
      </View>

      <View style={[styles.square, { backgroundColor: '#ff5f7a' }]}>
        <Text>Square 3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }

});