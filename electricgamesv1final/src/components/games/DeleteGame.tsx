import { useState, useContext, ChangeEvent } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";


const DeleteGame = () =>

{

    const [id, setId] = useState<number>(0);
    const { deleteGameById } = useContext(GameContext) as IGameContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt( e.currentTarget.value ));
    }

    const deleteGame = () => {
        deleteGameById( id );
        alert("Deleted Game")
    }

    return (
        <section className="margin">
            <h3 className="h1">Delete a Game</h3> 
            <div className="container">
            <div className="row">
            <div>
                <label className="col-12 col-lg-2 margin-new-game">Type in ID to the game you want to delete </label>
                <input className="col-6 col-sm-6 margin-new-game" onChange={handleChange} type="number" value={id} />
            </div>
            <button className="col-lg-1 col-sm-3 col-4 button margin2" onClick={deleteGame}>Delete</button>          
            </div>
            </div>
        </section>
    )
}



export default DeleteGame;