import s from './CurrentValue.module.css'

type CurrentValueProps = {
    value: number
    maxCount: number
}

export const CurrentValue = (props: CurrentValueProps) => {
    return (
        <h1 className={props.value == props.maxCount ? s.maxValue : s.currentValue}>{props.value}</h1>
    )
}