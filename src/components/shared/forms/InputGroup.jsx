import styled from "styled-components";
import TextInputs from "../../ui/inputs/TextInputs";
import Label from "../../ui/inputs/Label"


const Container = styled.div`
    padding: 1rem;
    border: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;



const ErrorMsg=styled.div`
  font-size: 0.8rem;
  color: red;
  user-select: none;
`;



const InputGroup = ({label,value,placeholder,name,error,onChange,onFocus,onBlur}) => {
  return (
    <Container>
        <Label htmlFor={name}>{label}</Label>
        <TextInputs name={name} id={name} placeholder={placeholder ?? ''} value={value} onChange={onChange} error={error} onFocus={onFocus} onBlur={onBlur}/>
        {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  )
}

export default InputGroup;