import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

interface TaskProps {
  text: string,
  checkBox: boolean
  statusTask: (text: string) => void
  onRemove: () => void
}

export function Task({text, checkBox, statusTask, onRemove}: TaskProps) {

  function handleCheckBox () {
    statusTask(text)
  }

  return(
    <View style={styles.container}>

      {checkBox ?
      <TouchableOpacity onPress={handleCheckBox}>
        <View style={styles.checkBoxTrue}>
           <Icons name='check' size={16} color='#fff' />
        </View>
      </TouchableOpacity>
        :
      <TouchableOpacity onPress={handleCheckBox}>
        <View style={styles.checkBox}></View>
      </TouchableOpacity>
      }

      <View >
      {checkBox ?
       <Text style={styles.TextTrue}>{text}</Text>
        :
        <Text style={styles.Text}>{text}</Text>
      }
      </View>
      <Icons onPress={onRemove} name='trash-can-outline' size={24} color='#808080' />
    </View>
  )
}