import React,{FunctionComponent,SyntheticEvent,useState} from 'react'
import './cardForm.scss'

const CardForm:FunctionComponent<any> = ({setName}) => {

    const [inputValue, setInputValue] = useState(' ');

    const handleChange = (e:SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        setInputValue(target.value.trim())
    }

    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        setName(inputValue)
    }

    return (
        <div className="card__input">
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">username:</label>
                <input type="text"  id="userName" value={inputValue} onChange={handleChange} />
            </form>
        </div>
    )
}

export default CardForm