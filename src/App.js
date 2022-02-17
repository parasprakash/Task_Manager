import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const callgetdata = async ()=>{
      const getdata = await getTasks()
      setTasks(getdata)
    }
    callgetdata()
  },[])

  //fetch tasks
  const getTasks = async ()=>{
      const base = await fetch("http://localhost:4000/tasks")
      const data = await base.json()
      return data
    }

    //fetch a single task
    const getTask = async (id)=>{
      const res = await fetch(`http://localhost:4000/tasks/${id}`)
      const data = res.json()
      return data
    }

  //add task
  const addTask = async (task)=>{
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    const res = await fetch("http://localhost:4000/tasks",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const newdata = await res.json()
    setTasks([...tasks, newdata])
  }

  //delete task
  const deleteTask = async (id)=>{
    await fetch(`http://localhost:4000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=> task.id!==id))
  }

  //toggle reminder
  const toggleReminder = async (id)=>{
    const res = await getTask(id)
    const newres = {...res, reminder:!res.reminder}
    const data = await fetch(`http://localhost:4000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newres),
    })
    setTasks(tasks.map((task)=>(task.id===id?{...task,reminder:newres.reminder}:task)))
  }

  return (
    <div className="container">
      <Header text="Schedule Manager" onShow={showAddTask} onAdd={()=> setshowAddTask(!showAddTask)} />
      {showAddTask?<AddTask onAdd={addTask} />:''}
      {tasks.length>0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):"No tasks to display"}
    </div>
  );
}

export default App;
