import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Home from "../../screens/homescreen";
import styles from "../../screens/styles";


const carComponent=({navigation})=>{
         const [number, onChangeNumber] = React.useState(null);  

    return(
       <View style={styles.container} >
        <Text style={styles.text}>How many kilometers do you drive a week?</Text>
       
        <View style={styles.textInputView} >
        <TextInput style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric" />
        
     
        <Button style={styles.button} 
        color= "#5cb85c"
        title = "Add Activity" onPress={()=>{
        navigation.navigate("Home", {
        carNumber: number
        })
      }}/>
        
      </View>
      </View>
    )   
    
}

export default carComponent
