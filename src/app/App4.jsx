import '../index.css';
import {useState} from 'react'
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/ui/buttons/Button';
import { deepClone, isObjEmpty } from '../utils/objectUtils';


const init ={
  title:{
    value:'',
    error:'',
    focus:false,
  },
  bio:{
    value:'',
    error:'',
    focus:false,
  },
  skills:{
    value:'',
    error:'',
    focus:false,
  },
}


const App = () => {
const [state,setState] = useState({...init})
// const [hasError,setHasError] = useState(false)


const mapStateToValue = (state)=>{
  return Object.keys(state).reduce((acc,cur)=>{

    acc[cur] = state[cur].value

    return acc;
  },{})
}




const handleChange =(e)=>{
 
  const {name:key, value} = e.target;
  const oldState = deepClone(state);
  const values = mapStateToValue(oldState);
  const {errors} = checkValidity(values)

  oldState[key].value = value

  if(oldState[key].focus && errors[key]){
    oldState[key].error = errors[key] ;
  }else{
    oldState[key].error = ''
  }
  setState(oldState)
}



const handleSubmit =(e)=>{
  e.preventDefault()

  const values = mapStateToValue(state);

  const {isValid,errors} = checkValidity(values)

  if(isValid){
    console.log(state);
  
  }else{
    const oldState = deepClone(state);

    Object.keys(errors).forEach((key)=>{
      oldState[key].error = errors[key];
    });

    setState(oldState)

  }
}


const checkValidity = (values)=>{
  const errors = {};
  const {title,bio,skills}=values;
  if(!title){
    errors.title = 'Invalid Title'
  }
  if(!bio){
    errors.bio = 'Invalid Bio'
  }
  if(!skills){
    errors.skills = 'Invalid Skills'
  }
  return{
    errors,
    // isValid :Object.keys(errors).length ===0,
    isValid: isObjEmpty,
  }
}

const handleFocus = (e)=>{
  const {name} = e.target;

  const oldState = deepClone(state);

  oldState[name].focus = true
  setState(oldState)
}

const handleBlur=(e)=>{
  const key = e.target.name
  const values = mapStateToValue(state);
  const {errors} = checkValidity(values)

  const oldState = deepClone(state)


  if(oldState[key].focus && errors[key]){
    oldState[key].error = errors[key] ;
  }else{
    oldState[key].error = ''
  }
  setState(oldState)
}



  return (
    <div className='root'>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <InputGroup label={'Title'} name={'title'} value={state.title.value} placeholder={'Software Engineer'} onChange={handleChange} error={state.title.error} onFocus={handleFocus} onBlur={handleBlur}/>

          <InputGroup label={'Bio'} name={'bio'} value={state.bio.value} placeholder={'I am a Software engineer'} onChange={handleChange} error={state.bio.error} onFocus={handleFocus} onBlur={handleBlur}/>
          
          <InputGroup label={'Skills'} name={'skills'} value={state.skills.value} placeholder={'JavaScript,React'} onChange={handleChange} error={state.skills.error} onFocus={handleFocus} onBlur={handleBlur}/>
          <Button>Submit</Button>
          </div>
      </form>
      
    </div>
  )
}

export default App;