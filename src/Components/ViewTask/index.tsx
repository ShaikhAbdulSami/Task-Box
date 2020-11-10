import React from 'react';
import { useSelector } from "react-redux"
import { store,archive } from "../../ReduxReducer"
import AddTaskSection from '../AddTask';
import './index.css'
import Button from '@bit/sh_enterprises.task-box.button'
import TaskList from "@bit/sh_enterprises.task-box.task-list";

interface task {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_ARCHIVED";

}


// function onPinTask (id:string) {

// store.dispatch(pin({ id: id}))

// }


function onArchiveTask (id:string) {

store.dispatch(archive({ id: id}))

}


// function onUnpinTask (id:string) {

//     store.dispatch(unpin({ id: id}))
    
// }

export default function InboxScreen() {
    const reducer= useSelector((state) => state);
    console.log(reducer)

    const [open,setOpen] = React.useState(false)

return (
    <div >
      {open &&
        <AddTaskSection open = {open} setOpen = {setOpen}></AddTaskSection>
      }
      <div >
        <h1 className = "mainHeading">My Taskbox</h1>
      </div>
      <TaskList tasks = {reducer as task[] }  onArchiveTask = {onArchiveTask}  ></TaskList>
      
      <div className = "addANewTaskButtonContainer">
      <Button onClick = {()=>{setOpen(true)}}  variant = "dark">Add a Task</Button>
      </div>
      
    </div>
  );
}