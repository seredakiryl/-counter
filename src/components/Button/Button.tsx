import s from './Button.module.css'

type ButtonProps = {
    callback: () => void
    name: string
    disabled: boolean
}

export const Button = (props: ButtonProps) => {

    return <button className={s.button} disabled={props.disabled} onClick={props.callback}>
        {props.name}
    </button>
}