import React from 'react';
import {store,add} from '../../ReduxReducer'
import AddTask from '@bit/sh_enterprises.task-box.add-task';
//import '../../App.css'

export interface props {
    open:boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void
}
export default function AddTaskSection(props:props) {
    const [input, setInput] = React.useState("");

    function inputOnChange (e: React.ChangeEvent<HTMLInputElement>) {
        setInput (e.target.value);
 
    }
        const handleSave = () => {
        props.setOpen(false);

        if (input === ""){

        store.dispatch (add({title: "Untitled Task"}))

        }
        else{

        store.dispatch (add({title: input}))

        }

    };

    const handleCancel = () => {
        props.setOpen(false);
    };

    return (
        <div >
            <AddTask handleSave = {handleSave} handleCancel = {handleCancel} inputOnChange = {inputOnChange} />
        </div>
  
    )
}