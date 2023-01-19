import { useState, useContext, ChangeEvent } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";


const DeleteCharacter = () =>

{



    const [id, setId] = useState<number>(0);
    const { deleteCharacterById } = useContext(CharacterContext) as ICharacterContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt( e.currentTarget.value ));
    }

    const deleteCharacter = () => {
        deleteCharacterById( id );
        alert("Deleted character")
    }

    return (
        <section className="margin">
            <h3 className="h1">Delete a Character</h3> 
            <div className="container">
            <div className="row">
            <div>
                <label className="col-12 col-lg-2 margin-new-game">Type in ID to the character you want to delete</label>
                <input className="col-6 col-sm-6 margin-new-game" onChange={handleChange} type="number" value={id} />
            </div>
            <button className="button margin2 col-lg-1 col-sm-3 col-4" onClick={deleteCharacter}>Delete</button>          
            </div>
            </div>
        </section>
    )
}



export default DeleteCharacter;