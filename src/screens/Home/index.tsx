import { Text, TextInput, TouchableOpacity, View, Image, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NoTasks } from "../../components/NoTasks";
import { Task } from "../../components/Task";
import { useState } from "react";

interface TasksProps {
  text: string,
  checkBox: boolean
}

export function Home () {

  const [tasks, setTasks] = useState<TasksProps[]>([])

  const [taskName, setTaskName] = useState('')

  const task = tasks.map(task => task.text)
  
  function handleTaskAdd () {
      if(task.includes(taskName)) {
        return Alert.alert('Tarefa existente', 'Essa tarefa já existe!')
      }else {
        setTasks([
          ...tasks, 
          {
            text: taskName, 
            checkBox: false
          }
        ])
        setTaskName('')
      }
  }
  
  function handleTaskRemove (name: string) {
    Alert.alert('Deletar tarefa?', `Deseja deletar a tarefa ${name}`, [
      {
        text: 'sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.text !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function statusTask (text: string) {
    const taskWithThisIdTask  = tasks.filter(task => {
      return task.text === text
    })
    taskWithThisIdTask.map(item => {
      if (item.checkBox === false) {
        return (item.checkBox = true)
      } else {
        return (item.checkBox = false)
      }
    })

   setTasks([...tasks])
  }

  const created = tasks.filter(Task => Task.checkBox === true)

  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Image 
          source={require("../../../assets/images/Logo.png")}
        /> 
      </View>

      <View style={styles.main}>

      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#808080'
          onChangeText={setTaskName}
          value={taskName}
        />

      <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
        <Text >
          <Icons name='plus-circle-outline' size={24} color='#F2F2F2' />
        </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.touchdown}>
        <View style={styles.Created}>
          <Text style={styles.textCreatd}>Criadas</Text>
          <Text style={styles.numberTouchdown}>{tasks.length}</Text>
        </View>
        <View style={styles.Completed}>
          <Text style={styles.textCompleted}>Concluidas</Text>
          <Text style={styles.numberTouchdown}>{created.length}</Text>
        </View>
      </View>
 
      <FlatList
        data={tasks}
        keyExtractor={task => task.text}
        renderItem={({item}) => (
          <Task 
          key={item.text}
          text={item.text}
          checkBox={item.checkBox}
          statusTask={statusTask}
          onRemove={() => handleTaskRemove(item.text)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <NoTasks/>
        )}
      />

      </View>
    </View>
  )
}