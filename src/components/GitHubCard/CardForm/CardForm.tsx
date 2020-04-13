import React,{FunctionComponent,SyntheticEvent,useState} from 'react'

const CardForm:FunctionComponent<any> = ({setName}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e:SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        setInputValue(target.value)
    }

    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        setName(inputValue)
    }

    return (
        <div className="card__input">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={inputValue} onChange={handleChange} />
                <button type="submit" />
            </form>
        </div>
    )
}

export default CardForm