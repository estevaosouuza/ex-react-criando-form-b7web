import { useState } from "react";

const App = () => {
 const  [firstName, setName] = useState('Usuário');
 const  [lastName, setLastName] = useState('');
 const  [age, setAge]  = useState('');

 const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.target.value = event.target.value.replace(/[^\p{L}\s]/gu, '')
  setName(event.target.value)
 }
 const handleInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.target.value = event.target.value.replace(/[^\p{L}\s]/gu, '')
  setLastName(event.target.value)
 }
 const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
  setAge(event.target.value)
 }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={firstName} onChange={handleInputName} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleInputLastName} />
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleInputAge} />
      </div>

      <hr/>

      Olá {firstName} {lastName}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;