import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings/Settings';

function App() {
  let [count, setValue] = useState(0);
  let [maxCount, setMaxValue] = useState(7);
  let [error, setError] = useState('')

  useEffect(() => {
    let countLocalStorge = localStorage.getItem('curentValue')
    if (countLocalStorge) {
      setValue(JSON.parse(countLocalStorge))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('curentValue', JSON.stringify(count))
  }, [count])

  return (
    <div className={s.app} >
      <Routes>
        <Route path={'/'} element={<Counter count={count}
          maxCount={maxCount}
          setValue={setValue}
          error={error}
        />}>
        </Route>
        <Route path={'/Sattings'} element={<Settings
          maxCount={maxCount}
          count={count}
          setMaxValue={setMaxValue}
          setValue={setValue}
          setError={setError}
          error={error}
        />}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
