import React, { useState } from 'react';

function App() {

  const [newName, setNewName] = useState<string>('')

  const randomNumber = (min: number, max: number): number =>{
    return Math.floor(Math.random() * (max - min + 1));
  }

  function* nameGenerator (){
    const abc = 'abcdefghijklmnopqrstuvwxyz'

    while(true){
      let name: string = ''
      for(let i = 0; i < 6; i++){
        name += abc[randomNumber(0, abc.length - 1)]
      }
      yield `${name}`
    }

  }

  const onClickButton = () =>{
    const name = nameGenerator().next().value 
    setNewName(name!)
  }


  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__container container">
          <input value={newName} type="text" className="input" placeholder='Здесь будет ваше имя'/>
          <button onClick={onClickButton} className="button">Сгенерировать имя</button>
        </div>
      </main>
    </div>
  );
}

export default App;
