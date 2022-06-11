import s from './CurrentValue.module.css'

type CurrentValueProps = {
    value: number
    maxCount: number
    error: string
}

export const CurrentValue = (props: CurrentValueProps) => {

    const styleValue = (props.value == props.maxCount || props.error == 'Inccorect value!') && s.maxValue
    const value = props.error ? props.error : props.value
    return (<div className={s.currentValue}>
        <h3
            className={styleValue}
        >{value}</h3>
    </div>
    )
}