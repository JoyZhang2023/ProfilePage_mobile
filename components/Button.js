import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button ({ label }) {
    return (
        <View style = {styles.buttoncontainer}>
            <Pressable style={styles.button} onPress={()=> alert('Drink some water :)')}>
                <Text style={styles.buttonlabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 4,
      height: 4,
      marginHorizontal: 20,
      padding: 3,
    },
    button: {                    
      borderRadius: 20,
      width: 250,
      height: 25,
      marginBottom: 20,
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      backgroundColor: '#cccc',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#cccccc',
      fontSize: 16,
    },
  });