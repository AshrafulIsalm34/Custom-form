import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../../../components/ui/buttons/Button';

const init ={
    text:'',
    checked:false,
    group:'home',
    priority:'low',
    file:''
}
const Task = () => {
    const {formState,handleChange,handleSubmit} = useForm({ init, validate:true })

    const submitCB=({values})=>{
        console.log(JSON.stringify(values))
    }


  return (
    <div>
        <h1>Task</h1>
        <form onSubmit={(e)=>handleSubmit(e,submitCB)}>
            <input type="checkbox" name={'checked'} checked={formState.checked.value}  onChange={handleChange}/>
            <input type="text" name={'text'} value={formState.text.value} onChange={handleChange} />
            <select name="group" value={formState.group.value} onChange={handleChange}>
                <option value="office">Office</option>
                <option value="home">Home</option>
                <option value="phone">Phone</option>
                <option value="mobile">Mobile</option>
            </select>

            <div>
                <input type="radio" name='priority' value={'low'} onChange={handleChange}/> Low
                <input type="radio" name='priority' value={'medium'} onChange={handleChange}/> Medium
                <input type="radio" name='priority' value={'high'} onChange={handleChange}/> High
            </div>

            <div>
                <input type="file" name='file' value={formState.file.name} onChange={handleChange}/>
            </div>
            
            <div>
                <Button type='submit'>Submit</Button>
            </div>
        </form>
        
    </div>
  )
}

export default Task