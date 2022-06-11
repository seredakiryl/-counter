import { Button } from "./Button/Button"
import { CurrentValue } from "./CurrentValue/CurrentValue"
import s from './Counter.module.css'
import { NavLink } from "react-router-dom"
type CounterPropsType = {
    count: number
    maxCount: number
    setValue: (value: number) => void
    error: string
}
export const Counter = (props: CounterPropsType) => {

    const increment = () => {
        props.setValue(props.count + 1)
    }
    const reset = () => {
        props.setValue(0)
    }

    return (
        <div className={s.counter}>
            <CurrentValue value={props.count} error={props.error} maxCount={props.maxCount} />
            <div className={s.buttons}>
                <Button disabled={props.count === props.maxCount} name={'INC'} callback={increment} />
                <Button disabled={props.count === 0} name={'RESET'} callback={reset} />
                <NavLink to={'/Sattings'}> <Button name={'SET'} /></NavLink>
            </div>
        </div>
    )
}