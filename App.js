import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={{
    flex:1
   }}>

<View style={{
  flex:2,
  padding:10
}}>
  <View style={{
flexDirection:'row',
  }}>
<p style={{flexDirection:'row',margin:0,}}>15 Dec,2022</p>

<img style={{width:50,height:50,
display:'flex',
alignContent:'flex-end'
}} src="https://i.pinimg.com/564x/cb/b6/1d/cbb61dc9f560a4e96c2c64f41a90ce3f.jpg" alt="" />
  </View>
  <h2 style={{
  marginRight:5
}}>Tony Stark</h2>
  <View>
    
  </View>
</View>
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
