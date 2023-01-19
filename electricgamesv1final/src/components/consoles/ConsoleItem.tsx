import { FC } from 'react';
import IConsole from '../../interfaces/IConsole';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Test.css';

const ConsoleItem : FC<IConsole> = ({id, consoleName, consolePrice, consoleImage}) => {
    return (
            <article className='games-box margin col-10 col-sm-4 col-lg-3'>
                <h3 className='games-h1'>{id}: {consoleName}</h3>
                <p className='text'>Price: {consolePrice}</p>
                <img className='width-height' src={`https://localhost:7226/images/${consoleImage}`}/>
            </article>
)}

export default ConsoleItem;