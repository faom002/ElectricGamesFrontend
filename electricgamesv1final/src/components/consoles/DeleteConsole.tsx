import { useState, useContext, ChangeEvent } from "react";
import { ConsoleContext } from "../../contexts/ConsoleContext";
import IConsoleContext from "../../interfaces/IConsoleContext";


const DeleteConsole = () =>

{

    const [id, setId] = useState<number>(0);
    const { deleteConsoleById } = useContext(ConsoleContext) as IConsoleContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt( e.currentTarget.value ));
    }

    const deleteConsole = () => {
        deleteConsoleById(id);
        alert("Deleted Console")

    }

    return (
        <section className="margin">
            <h3 className="h1">Delete a Console</h3> 
            <div className="container">
            <div className="row">
            <div>
                <label className="col-12 col-lg-2 margin-new-game text-size">Type in ID to the console you want to delete</label>
                <input className="col-6 col-sm-6 margin-new-game" onChange={handleChange} type="number" value={id} />
            </div>
            <button className="margin2 button col-lg-1 col-sm-3 col-4" onClick={deleteConsole}>Delete</button>          
            </div>
            </div>
        </section>
    )
}



export default DeleteConsole;