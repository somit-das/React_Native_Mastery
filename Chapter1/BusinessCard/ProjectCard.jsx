
import { Image, Text, View,StyleSheet } from 'react-native'

export const ProjectCard = ({image,name}) => {
  return <View>
        <Image
          source={image}
          style={styles.image}
        />
        <Text
          style={styles.text}
        >
          {name}
        </Text>
      </View>
}
const styles = StyleSheet.create({
    image:{
        height: 150, 
        aspectRatio: 16 / 9,
        borderRadius: 10
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'dimgray',
        marginTop: 10,
    }
})