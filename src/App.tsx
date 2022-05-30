import { useEffect, useState } from 'react';
import s from './App.module.css';
import { Counter } from './components/Counter';

function App() {
  let [count, setValue] = useState(0);

  useEffect(() => {
    let countLocalStorge = localStorage.getItem('curentValue')
    if (countLocalStorge) {
      let newValue = JSON.parse(countLocalStorge)
      setValue(newValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('curentValue', JSON.stringify(count))
  }, [count])


  const maxCount = 7
  const increment = () => {
    setValue(count + 1)

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
