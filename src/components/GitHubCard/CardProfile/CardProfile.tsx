import React, { FunctionComponent, useEffect, useState } from 'react';
import './cardProfile.scss'


export const CardProfile: FunctionComponent<any> = ({ name }) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${name}`)
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError(error)
            }

        }

        fetchData()

    }, [name])
    console.log(data)
    
    if(error) return <div  style={{ 'color': 'red', 'fontSize': '1.5em' }}>Ooops...error:{error.message}</div>
    if (!data) return <div style={{ 'color': 'darkgray', 'fontSize': '1.5em' }}>Loading...</div>
    if (data.message === "Not Found") return <div style={{ 'color': 'red', 'fontSize': '1.5em' }}>{data.message}...please try again</div>
    return (

        <>
            <div className="card__profile">
                <img src={data.avatar_url} alt="profileImg" />
                <h2>{data.login}</h2>
            </div>
            <div className="card__state">
                <div>
                    <h3>{data.public_repos}</h3>
                    <span>Repositories</span>
                </div>
                <div>
                    <h3>{data.followers}</h3>
                    <span>Followers</span>
                </div>
                <div>
                    <h3>{data.following}</h3>
                    <span>Following</span>
                </div>
                
            </div>
            <div className="card__date">
                <span><strong>account created:</strong>{data.created_at.slice(0,10)}</span>
                <span><strong>account last update:</strong>{data.updated_at.slice(0,10)}</span>
            </div>
            
        </>
    )
} 

