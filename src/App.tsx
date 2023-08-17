import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__container container">
          <input type="text" className="input" placeholder='Здесь будет ваше имя'/>
          <button className="button">Сгенерировать имя</button>
        </div>
      </main>
    </div>
  );
}

export default App;
