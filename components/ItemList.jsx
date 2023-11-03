import { TouchableOpacity,View,Text,StyleSheet } from "react-native"

const ItemList = ({data,onModal}) => {

    return (
        <TouchableOpacity onPress={()=> onModal(data.item.id)}>
        <View style={styles.itemList}>
          <Text>{data.item.value}</Text>
        </View>
      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemList:{
        flexDirection:"column"
    }
  })
export default ItemList