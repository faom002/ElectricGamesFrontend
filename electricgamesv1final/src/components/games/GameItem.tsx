import { FC } from 'react';
import IGame from '../../interfaces/IGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Test.css';

const GameItem : FC<IGame> = ({id, gameName, gameGenre, gamePlatform, gamePrice, gameReleaseYear, gameImage}) => {
    return (
            <article className='games-box margin col-10 col-sm-4 col-lg-3'>
                <h3 className='games-h1'>{id}: {gameName}</h3>
                <p className='text'>Genre: {gameGenre}</p>
                <p className='text'>Platform: {gamePlatform}</p>
                <p className='text'>Release year: {gameReleaseYear}</p>
                <p className='text'>Price: {gamePrice}</p>
                <img className='width-height' src={`https://localhost:7226/images/${gameImage}`}/>
            </article>
)}

export default GameItem;