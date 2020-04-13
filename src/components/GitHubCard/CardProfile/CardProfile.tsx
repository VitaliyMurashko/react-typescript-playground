import React,{FunctionComponent} from 'react';
import {useFetch} from '../../../hooks/useFetch';

export const CardProfile:FunctionComponent<any> = ({name}) => {
    const data:any = useFetch(`https://api.github.com/users/${name}`,{});
    console.log(data)
    return (
        <>
            <div className="card__profile">
                <img src={data.avatar_url} alt="profileImg"/>
                <h2>{data.name}</h2>
            </div>
            <div className="card__state">
                <div>
                    <span>{data.public_repos}</span>
                    <span>repositoriys</span>
                </div>
            </div>
        </>    
    )
} 