import '../index.css';
import {useState} from 'react'
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/ui/buttons/Button';


const init ={
  title:'',
  bio:'',
  skills:'',
}


const App = () => {
const [values, setValues] = useState({...init})
const [errors, setError] = useState({...init})
const [focuses,setFocuses] = useState({
  title:false,
  bio:false,
  skills:false,
})



const handleChange =(e)=>{
  setValues((prev)=>({
    ...prev,
    [e.target.name]:e.target.value,
  }));

  const key = e.target.name;
  const {errors} = checkValidity(values)
  if(errors[key]){
    setError((prev)=>({
      ...prev,
      [key]:'',
    }))
  }
}



const handleSubmit =(e)=>{
  e.preventDefault()
  const {isValid,errors} = checkValidity(values)
  if(isValid){
    console.log(values);
    setError({...errors})
    setValues({...init})
  }else{
    setError({...errors})
  }
}


const checkValidity = (values)=>{
  const errors = {};
  const {title,bio,skills}=values
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
    isValid :Object.keys(errors).length ===0,
  }
}

const handleFocus = (e)=>{
  setFocuses((prev)=>({
    ...prev,
    [e.target.name]:true,
  }))
}

const handleBlur=(e)=>{
  const key = e.target.name
  const {errors} = checkValidity(values)
  if(errors[key] && focuses[key] === true){
    setError((prev)=>({
      ...prev,
      [key]:errors[key],
    }))
  }else{
    setError((prev)=>({
      ...prev,
      [key]:'',
    }))
  }
}

  return (
    <div className='root'>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <InputGroup label={'Title'} name={'title'} value={values.title} placeholder={'Software Engineer'} onChange={handleChange} error={errors.title} onFocus={handleFocus} onBlur={handleBlur}/>
          <InputGroup label={'Bio'} name={'bio'} value={values.bio} placeholder={'I am a Software engineer'} onChange={handleChange} error={errors.bio} onFocus={handleFocus} onBlur={handleBlur}/>
          <InputGroup label={'Skills'} name={'skills'} value={values.skills} placeholder={'JavaScript,React'} onChange={handleChange} error={errors.skills} onFocus={handleFocus} onBlur={handleBlur}/>
          <Button>Submit</Button>
          </div>
      </form>
      
    </div>
  )
}

export default App;