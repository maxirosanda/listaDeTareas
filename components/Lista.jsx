import {View,FlatList } from "react-native"
import ItemList from "./ItemList"

const Lista = ({items,onModal}) =>{
    return (
      <View>
        <FlatList
          data={items}
          renderItem={data =>(
            <ItemList data={data} onModal={onModal}/>
          )}
          keyExtractor={item => item.id}
         />
      </View>
    )
}



export default Lista