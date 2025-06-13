import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView,Button,Linking} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {
  const onContactMe=()=>{
    // console.warn("Contact Me");
    Linking.openURL("mailto:smithjasn4@gmail.com")
  }
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
    <View style={styles.container}>
      <Image source={{
        uri: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}
        style={{
          height: '20%',
          width: '100%',
          // aspectRatio:16/9
        }}
      />
      <Image source={require('./assets/ProfileImage.png')} style={{
        width: 100, height: 100, borderRadius: 50, borderWidth: 5,
        borderColor: 'white',
        marginTop: '-50'
      }} />
      <Text style={{ fontSize: 30, fontWeight: 500 }}>Somit Das</Text>
      <Text>just another developer</Text>

      <View style={{ flexDirection: 'row', gap: '10', marginVertical: '10' }}>

        <FontAwesome5 name="github" size={24} color="black" />
        <FontAwesome6 name="x-twitter" size={24} color="black" />
        <FontAwesome5 name="telegram" size={24} color="black" />
        <StatusBar style="auto" />
      </View>

      <Button title='contact-me' onPress={onContactMe}/> 

      <Text style={{ padding: 10, fontSize: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
        aliquam sem et tortor consequat id porta nibh. Pellentesque nec
        nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
        gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
        in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Sagittis orci a scelerisque purus semper eget duis
        at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
        Duis at consectetur lorem donec massa sapien faucibus et molestie.
        At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
        eget. Purus sit amet volutpat consequat mauris nunc congue nisi
        vitae. Urna condimentum mattis pellentesque id nibh tortor id.
        Consequat id porta nibh venenatis. Lectus vestibulum mattis
        ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
        ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
        Turpis egestas integer eget aliquet nibh praesent tristique magna
        sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
        integer feugiat scelerisque varius morbi enim. Consectetur a erat
        nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
        amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
        neque viverra justo. Malesuada pellentesque elit eget gravida.
        Vitae nunc sed velit dignissim sodales ut eu sem integer.
        pellentesque. Sagittis orci a scelerisque purus semper eget duis
        at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
        Duis at consectetur lorem donec massa sapien faucibus et molestie.
        At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
        eget. Purus sit amet volutpat consequat mauris nunc congue nisi
        vitae. Urna condimentum mattis pellentesque id nibh tortor id.
        Consequat id porta nibh venenatis. Lectus vestibulum mattis
        ullamcorper velit sed ullamcorper.pellentesque. Sagittis orci a scelerisque purus semper eget duis
        at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
        Duis at consectetur lorem donec massa sapien faucibus et molestie.
        At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
        eget. Purus sit amet volutpat consequat mauris nunc congue nisi
        vitae. Urna condimentum mattis pellentesque id nibh tortor id.
        Consequat id porta nibh venenatis. Lectus vestibulum mattis
        ullamcorper velit sed ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
        aliquam sem et tortor consequat id porta nibh. Pellentesque nec
        nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
        gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
        in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Sagittis orci a scelerisque purus semper eget duis
        at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
        Duis at consectetur lorem donec massa sapien faucibus et molestie.
        At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
        eget.
      </Text>
    </View>
    </ScrollView>
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
