import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
const [Task, setTask] = useState('')
const [Day, setDay] = useState('')
const [Reminder, setReminder] = useState(false)

const onSubmit = (e)=>{
    e.preventDefault();
    if(Task===''){
        alert('Please mention task!')
        return
    }
    if(Day===''){
        alert('Please mention Day!')
        return
    }
    const text=Task
    const day=Day
    const reminder=Reminder
    onAdd({text, day, reminder})
    setTask('')
    setDay('')
    setReminder(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={Task} 
            onChange={(e)=>setTask(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={Day} 
            onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' value={Reminder} checked={Reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>

        <input type='submit' placeholder='Save' className='btn btn-block'></input>
    </form>
  )
}

export default AddTask