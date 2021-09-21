import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";


const chickenComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);

    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>How many kilograms of Chicken do you eat a week?</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
     
      />
      <Button title = "Add Activity" onPress={()=>{
        navigation.navigate('Home', {
          chickenNumber: number
        })
      }} />
        
      </View>
    )   
    
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default chickenComponent
