import {
  StyleSheet,
  Text,
  View,
//   SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import QuestionCard from "../components/QuestionCard";

export default function QuizScreen() {
  return (
    <SafeAreaProvider >
    <SafeAreaView edges={["top"]}  style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        <View>
          <QuestionCard />
          <Text style={styles.time}>20 sec</Text>
        </View>
        {/* Footer */}
        {/* <Button title="Next" /> */}
        <Pressable 
            onPress={() => console.log("pressed")} 
            onLongPress={()=> console.log("Long Press")}
            style={styles.button}
            >   
          <Text style={styles.buttonText}>Next</Text> 
          <FontAwesome6 name="arrow-right-long" size={24}  style={styles.buttonIcon} />
        </Pressable> 
        {/* Customizable Button */}
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fdfef4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems:"center"
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    marginTop: 10,
    textAlign: "center",
    color: "#005055",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon:{
    position:"absolute",
    color:'white',
    right: 30
  }
});
