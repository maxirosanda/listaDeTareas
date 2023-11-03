import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import ModalItem from './components/ModalItem'
import Lista from './components/Lista'
import AddItem from './components/AddItem'


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
    <View style={styles.container}>
       <AddItem onChange={onHandleChangeItem} onAddItem={addItem} value={textItem}/>  
      <Lista items={itemList} onModal={onHandlerModal} />
      <ModalItem item={itemSelected} onDelete={onHandlerDelete} visible={modalVisible} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    padding : 50
  }

})


