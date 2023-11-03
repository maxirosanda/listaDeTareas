import { Modal,Text,View,Button,StyleSheet } from "react-native"

const ModalItem= ({item,onDelete,visible}) => {
    return (
        <Modal animationType='slide' visible={visible}>
          <View style={styles.modalTitle}>
              <Text>Mi Modal</Text>
          </View>
          <View style={styles.modalMessage}>
              <Text>¿Esta seguro que desea borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{item.value}</Text>
          </View>
          <View>
              <Button onPress={() => onDelete(item.id)} title="CONFIRM"/>
          </View>
      </Modal>
    )

}

const styles = StyleSheet.create({
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
  
  })


export default ModalItem