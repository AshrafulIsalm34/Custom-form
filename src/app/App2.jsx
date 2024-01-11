
import styled from "styled-components";

import InputGroup from "../components/shared/forms/InputGroup";


const fontSizes ={
  sm: '0.5rem',
  md: '1rem',
  lg: '1.2rem'
};

const BaseButton = styled.button`
  border:none;
  outline:none;
  text-transform:upperCase;
  letter-spacing:2px;
  padding:0.5rem 1rem;
  font-size:${(props)=>fontSizes[props.size] ?? '1rem'};
  cursor:pointer;
`;

const PrimaryButton=styled(BaseButton)`
  background:red;
  color:white;
`


const SecondaryButton=styled(BaseButton)`
  background:yellow;
  color:#333;
`


function App() {
  return (
    <div>
     <h2>Styled Components</h2>
     <BaseButton size='lg'>Base</BaseButton>
     <PrimaryButton size='md'>Primary</PrimaryButton>
     <SecondaryButton size='sm'>Secondary</SecondaryButton>

     <InputGroup/>
    </div>
  );
}

export default App;
