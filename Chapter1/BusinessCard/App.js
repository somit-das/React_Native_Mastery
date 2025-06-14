import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  Dimensions,
  // SafeAreaView
  // ActivityIndicator,
  

} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProjectCard } from './ProjectCard';

export default function App() {
  const name = "Somit Das";
  const onContactMe = () => {
    Linking.openURL("mailto:smithjasn4@gmail.com")
  }
  const onDesignation = () => {
    return 'just another developer';
  }
  const links = {
    github: 'sd213',
    telegram: 'sd213',
    // // x:
    // behance:'wsd9',
    thread: 'smith@'
  }
 
  const renderIcons = () => {
    return (

      <View style={{ flexDirection: 'row', gap: '10', marginVertical: '10' }}>

        {links.github && <FontAwesome5 name="github" size={24} color="black" />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
        {links.telegram && <FontAwesome5 name="telegram" size={24} color="black" />}
        {links.behance && <FontAwesome5 name="behance" size={24} color="black" />}
        {links.thread && <FontAwesome6 name="threads" size={24} color="black" />}

      </View>
    )
  }

  return (

    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} >

        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.container}>
            <Image source={{
              uri: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}
              style={{
                // height: '20%',
                width: '100%',
                aspectRatio:16/9
              }}
            />
            <Image source={require('./assets/ProfileImage.png')} style={{
              width: 100, height: 100, borderRadius: 50, borderWidth: 5,
              borderColor: 'white',
              marginTop: '-50'
            }} />
            <Text style={{ fontSize: 30, fontWeight: 500 }}>{name}</Text>
            <Text>{onDesignation()}</Text>

            {renderIcons()}
            <Button title='contact-me' onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              aliquam sem et tortor consequat id porta nibh. Pellentesque nec
              nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
              gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
              in mollis nunc.
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>
             
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap:10,padding:10}}
            >

              {/* {ProjectCard()}
              {ProjectCard()}
              {ProjectCard()} */}
              <ProjectCard name="Library MGMT" image={require("./assets/projects/project1.jpg")} />
              <ProjectCard name="Heart Disease Analysis" image={require("./assets/projects/project2.jpg")} />
              <ProjectCard name="SMA" image={require("./assets/projects/project3.jpg")} />
              <ProjectCard name="Music Generation AI" image={require("./assets/projects/project4.jpg")} />
            </ScrollView>

            <StatusBar style="light" />
          </View>
        </ScrollView>

      </SafeAreaView>

    </SafeAreaProvider>

  );
}
// const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // height:screenHeight
  },
});
