import React from 'react';
import Block from './Block';
import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';

function App() {
  return (
      <div>
        <h1 className="main_title">Что Вам необходимо?</h1>
        <div className="main_block">
          <Block img={f3} title="Первый блок" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
          <Block img={f4} title="Второй блок" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
          <Block img={f5} title="Третий блок" text="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
        </div>
      </div>
  );
}

export default App;
