import { Button } from "./Button/Button"
import { CurrentValue } from "./CurrentValue/CurrentValue"
import s from './Counter.module.css'
type CounterPropsType = {
    count: number
    maxCount: number
    increment: () => void
    reset: () => void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <CurrentValue value={props.count} maxCount={props.maxCount} />
            <div className={s.buttons}>
                <Button disabled={props.count == 7} name={'INC'} callback={props.increment} />
                <Button disabled={props.count == 0} name={'RESET'} callback={props.reset} />
            </div>
        </div>
    )
}