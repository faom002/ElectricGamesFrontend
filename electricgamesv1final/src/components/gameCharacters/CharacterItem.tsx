import { FC } from 'react';
import ICharacter from '../../interfaces/ICharacter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Test.css';

const CharacterItem : FC<ICharacter> = ({id, characterName, characterGame, characterAge, characterImage}) => {
    return (
            <article className='games-box margin col-10 col-sm-4 col-lg-3'>
                <h3 className='games-h1'>{id}: {characterName}</h3>
                <p className='text'>Game: {characterGame}</p>
                <p className='text'>Age: {characterAge}</p>
                <img className='width-height' src={`https://localhost:7226/images/${characterImage}`}/>
            </article>
)}

export default CharacterItem;

