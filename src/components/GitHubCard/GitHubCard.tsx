import React,{useState} from 'react';
import './GitHubCard.scss';
import Container from '../Container/Container';
import {CardProfile} from './CardProfile/CardProfile';
import CardForm from './CardForm/CardForm'

const GitHubCard = () => {
    const [name, setName] = useState<string>('VitaliyMurashko');

    return (
        <Container BgColor="beige">
            <div className="card">
                <CardForm setName={setName}/>
               {name ? <CardProfile name={name}/> : <div>enter please name</div>} 
            </div>
        </Container>   
    )
}

export default GitHubCard