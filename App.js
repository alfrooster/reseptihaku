import { StyleSheet, View } from 'react-native';
import Recipes from './components/Recipes';

export default function App() {
  return (
    <View style={styles.container}>
      <Recipes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
