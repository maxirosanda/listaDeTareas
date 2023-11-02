import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList,Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [textItem,setTextItem] = useState("")
  const [itemList,setItemList] = useState([])
  const [itemSelected,setItemSelected] = useState({})
  const [modalVisible,setModalVisible] = useState(false)

  const onHandleChangeItem = (t) => setTextItem(t)
  
  const addItem = () =>{
    setItemList(currentItems => [
      ...currentItems,
      {id:Math.random(),value:textItem}
    ])
    setTextItem("")
  }

  const onHandlerDelete = id =>{
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={onHandleChangeItem} value={textItem} placeholder='Ingrese un valor'/>
          <Button title='ADD' onPress={addItem}/>
        </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={data =>(
            <TouchableOpacity onPress={()=> onHandlerModal(data.item.id)}>
              <View style={styles.itemList}>
                <Text>{data.item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal animationType='slide' visible={modalVisible}>
            <View style={styles.modalTitle}>
                <Text>Mi Modal</Text>
            </View>
            <View style={styles.modalMessage}>
                <Text>¿Esta seguro que desea borrar?</Text>
            </View>
            <View style={styles.modalMessage}>
               <Text style={styles.modalItem}>{itemSelected.value}</Text>
            </View>
            <View>
                <Button onPress={() => onHandlerDelete(itemSelected.id)} title="CONFIRM"/>
            </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  textInput:{
    borderBottomWidth:1,
    width:200,
    borderBottomColor:"black"
  },
  itemList:{
      flexDirection:"column"
  },
  modalTitle:{
    backgroundColor:"#ccc",
    color:"white",
    fontSize:18
  },
  modalMessage:{
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },
  modalButton:{
    marginTop:15
  },
  modalItem:{
    fontSize:30
  }

});
