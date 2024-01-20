import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export function NoTasks() {

  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Clipboard.png')}/> 
      <View >
        <Text style={styles.Text}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.Span}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}