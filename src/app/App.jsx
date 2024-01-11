import useForm from "../pages/hooks/useForm"
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/ui/buttons/Button';


const init={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
}

const validate =(values)=>{
  const errors = {}

  if(!values.firstName){
    errors.firstName = "First Name is Required!"
  }

  if(!values.lastName){
    errors.lastName = "Last Name is Required!"
  }

  if(!values.email){
    errors.email = "Email is Required!"
  }


  if(!values.password){
    errors.password = "Password is Required!"
  }else if(values.password.length <6){
    errors.password = "At Least 6 Character"
  }


  return errors;
}

const App = () => {
 const {formState:state, handleSubmit, handleBlur, handleChange, handleFocused, clear} = useForm({init,validate})
  
  const cb =({values,hasError,errors})=>{
    if(hasError){
      alert('[Error'+JSON.stringify(errors))
    }else{
      alert('[Success'+JSON.stringify(values))
    }
  }

  return (
    <div style={{maxWidth:'1200px',margin:'0 auto'}}>
      <h1>My Custom Hooks Form</h1>

      <form onSubmit={e=>handleSubmit(e,cb)}>
      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <InputGroup label={'First Name:'} name={'firstName'} value={state.firstName.value} placeholder={'First Name'} onChange={handleChange} error={state.firstName.error} onFocus={handleFocused} onBlur={handleBlur}/>

          <InputGroup label={'Last Name:'} name={'lastName'} value={state.lastName.value} placeholder={'Last Name'} onChange={handleChange} error={state.lastName.error} onFocus={handleFocused} onBlur={handleBlur}/>

          <InputGroup label={'Email:'} name={'email'} value={state.email.value} placeholder={'test@example.com'} onChange={handleChange} error={state.email.error} onFocus={handleFocused} onBlur={handleBlur}/>

          <InputGroup label={'Password:'} name={'password'} value={state.password.value} placeholder={'******'} onChange={handleChange} error={state.password.error} onFocus={handleFocused} onBlur={handleBlur}/>
      </div>
      <div style={{marginTop:'10px'}}>
        <Button type="reset" onClick={clear} style={{marginRight:'5px'}}>Clear</Button>
        <Button type="submit">Submit</Button>
      </div>
      </form>

    </div>
  )
}

export default App