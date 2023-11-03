import {View,TextInput,Button,StyleSheet} from "react-native"

const AddItem = ({onChange,onAddItem,value}) =>{
    return ( 
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={onChange} value={value} placeholder='Ingrese un valor'/>
          <Button title='ADD' onPress={onAddItem}/>
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    textInput:{
      borderBottomWidth:1,
      width:200,
      borderBottomColor:"black"
    }
  
  })
  

export default AddItem