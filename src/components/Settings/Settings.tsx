import { ChangeEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import { InputSettings } from './InputSettings/InputSettings'
import s from './Settings.module.css'

type SettingsPropsType = {
    setMaxValue: (value: number) => void
    setValue: (value: number) => void
    maxCount: number
    count: number
    error: string
    setError: (text: string) => void
}

export const Settings = (props: SettingsPropsType) => {

    let [sattingsStartValue, setSattingsStartValue] = useState(0)
    let [sattingsMaxValue, setSattingsMaxValue] = useState(0)
    let [disabledBtn, setDisabledBtn] = useState(false)

    const onChangeSattingsMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSattingsMaxValue(+e.currentTarget.value)
        setDisabledBtn(false)
        props.setError('You need save new settings')
    }

    const onChangeSattingsStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSattingsStartValue(+e.currentTarget.value)
        setDisabledBtn(false)
        props.setError('You need save new settings')
    }

    const saveSattingsValues = () => {
        props.setMaxValue(sattingsMaxValue)
        props.setValue(sattingsStartValue)
        setDisabledBtn(true)
        props.setError('')
    }

    useEffect(() => {
        let localSattingsMaxValue = localStorage.getItem('sattingsMaxValue')
        let localsattingsStartValue = localStorage.getItem('sattingsStartValue')
        if (localSattingsMaxValue) {
            setSattingsMaxValue(JSON.parse(localSattingsMaxValue))
        }
        if (localsattingsStartValue) {
            setSattingsStartValue(JSON.parse(localsattingsStartValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('sattingsMaxValue', JSON.stringify(sattingsMaxValue))
        localStorage.setItem('sattingsStartValue', JSON.stringify(sattingsStartValue))
    }, [sattingsMaxValue, sattingsStartValue])


    if (sattingsStartValue >= sattingsMaxValue || sattingsStartValue < 0) {
        props.setError('Inccorect value!')
    } else {
        props.setError('')
    }

    return (
        <div className={s.settings}>
            <div className={s.valuesContainer}>
                <InputSettings name={'Max Value'} value={sattingsMaxValue} error={props.error} callback={onChangeSattingsMaxValue} />
                <InputSettings name={'Start Value'} value={sattingsStartValue} error={props.error} callback={onChangeSattingsStartValue} />
            </div>
            <NavLink to={'/'} className={s.button}>
                <Button disabled={disabledBtn} name={'SET'} callback={saveSattingsValues} />
            </NavLink>
        </div >
    )
}