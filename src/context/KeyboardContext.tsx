import React, {useState, useContext} from 'react';

type ContextType = {
    text:string,
    setValue: any
}

export const KeyboardContext = React.createContext<ContextType | undefined>(undefined);

export const useText = () => useContext(KeyboardContext);



export const TextProvider : React.FC<any> = ({children}) => {
    const [text, setText] = useState<string>('');
    const setValue = ( t:string )=> setText((prev) => prev + t);
    
    return (
        <KeyboardContext.Provider value = {{text, setValue}}>
            {children}
        </KeyboardContext.Provider>
    )
}
 
export default TextProvider;