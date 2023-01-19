import { useState, useContext, ChangeEvent } from "react";
import { ConsoleContext } from "../../contexts/ConsoleContext";
import IConsole from "../../interfaces/IConsole";
import IConsoleContext from "../../interfaces/IConsoleContext";
import ImageUploadService from "../../services/ImageUploadService";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Test.css"


const AddNewConsole = () => {

    const { addConsole } = useContext(ConsoleContext) as IConsoleContext;

    const [image, setImage] = useState<File | null>(null);

    const [newConsole, setNewConsole] = useState<IConsole>({
        consoleName: "",
        consolePrice: 0,
        consoleImage: ""
    });

    const consoleObjecthandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setNewConsole({...newConsole,[name]: value});
    }


    const imageHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        const {files} = e.target;
          if(files!=null){ 
            const file = files[0];
            setImage(file);

            newConsole.consoleImage = file.name

          }
        
      }


    const addNewConsoleHandler = () => {
        if(newConsole != null && image != null){
            addConsole(newConsole); 
            ImageUploadService.uploadImage(image);
        }
        alert("Added new Console")

    }

    return (
      <section className="margin">
          <h3 className="h1">Add a new console</h3>
          <div className="container">
            <div className="row">
                <div>
              <label className="col-3 col-sm-2 margin-new-game">Name</label>
              <input className="col-6 col-sm-6 margin-new-game" name="consoleName" onChange={consoleObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-3 col-sm-2 margin-new-game">Price</label>
              <input className="col-6 col-sm-6 margin-new-game" name="consolePrice" onChange={consoleObjecthandler} type="number" />
              </div>
              
              <div>
              <label className="col-3 col-sm-2 margin-new-game">Image</label>
              <input className="col-6 col-sm-6 margin-new-game text" name="consoleImage" onChange={imageHandler} type="file" />
              </div>
              <button className="col-lg-1 col-sm-3 col-4 button margin2" onClick={addNewConsoleHandler}>Add</button>
          </div>
          </div>
          
      </section>
    )
}

export default AddNewConsole;