import React, {FunctionComponent} from 'react';
import './container.scss';

type ContainerType = {
    BgColor:string
}

const Container:FunctionComponent<ContainerType> = ({children, BgColor}) => <div className="container" style={{backgroundColor:`${BgColor}`}}>{children}</div>

export default Container;