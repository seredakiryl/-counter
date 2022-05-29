import { useState } from 'react';
import s from './App.module.css';
import { Counter } from './components/Counter';

function App() {
  let [count, setValue] = useState(0);

  const maxCount = 7
  const increment = () => {
    count < maxCount ? setValue(count + 1) : setValue(count)
    localStorage.setItem('curentValue', JSON.stringify(count))
  }
  const reset = () => {
    setValue(0)
  }

  return (
    <div className={s.app} >
      <Counter count={count}
        maxCount={maxCount}
        increment={increment}
        reset={reset}
      />
    </div>
  );
}

export default App;
