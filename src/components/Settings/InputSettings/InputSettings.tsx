import { ChangeEvent } from 'react'
import s from './InputSettings.module.css'

type InputPropsType = {
    name: string
    value: number
    error: string
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputSettings = (props: InputPropsType) => {
    return (
        <div className={s.value}>
            <div>{props.name}</div>
            <input type='number' className={props.error && s.inccorectValue} value={props.value} onChange={(e) => props.callback(e)} />
        </div>
    )
}