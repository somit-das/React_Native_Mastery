import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri:"https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}
        style={{
          height:'20%',
          width:'100%',
          // aspectRatio:16/9
        }}
      />
      <Image source={require('./assets/ProfileImage.png')} style={{
        width:100,height:100,borderRadius:50,borderWidth:5,
        borderColor:'white',
        marginTop:'-50'
      }} />
      <Text style={{fontSize:30,fontWeight:500}}>Somit Das</Text>
      <Text>just another developer</Text>
      
      <View style={{flexDirection:'row', gap:'10' ,marginVertical:'10'}}>

      <FontAwesome5 name="github" size={24} color="black"/>
      <FontAwesome6 name="x-twitter" size={24} color="black" />
      <FontAwesome5 name="telegram" size={24} color="black" />
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
