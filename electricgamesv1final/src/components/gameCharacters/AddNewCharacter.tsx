import { useState, useContext, ChangeEvent } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacter from "../../interfaces/ICharacter";
import ICharacterContext from "../../interfaces/ICharacterContext";
import ImageUploadService from "../../services/ImageUploadService";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Test.css"


const AddNewCharacter = () => {

    const { addCharacter } = useContext(CharacterContext) as ICharacterContext;

    const [image, setImage] = useState<File | null>(null);

    const [newCharacter, setNewCharacter] = useState<ICharacter>({
        characterName: "",
        characterGame: "",
        characterAge: 0,
        characterImage: ""
    });




    const characterObjecthandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setNewCharacter({...newCharacter,[name]: value});
    }


    const imageHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        const {files} = e.target; 
          if(files!=null){ 
            const file = files[0];
            setImage(file);

            newCharacter.characterImage = file.name


          }
        
      }


    const addNewCharacterHandler = () => {

        if(newCharacter != null && image != null){
            addCharacter(newCharacter); 
            ImageUploadService.uploadImage(image);
        }
      alert("Added new character")

    }

    return (
      <section className="margin">
          <h3 className="h1">Add a new character</h3>
          <div className="container">
            <div className="row">
                <div>
              <label className="col-3 col-sm-2 margin-new-game">Name</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterName" onChange={characterObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-3 col-sm-2 margin-new-game">Game</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterGame" onChange={characterObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-3 col-sm-2 margin-new-game">Age</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterAge" onChange={characterObjecthandler} type="number" />
              </div>
              
              <div>
              <label className="col-3 col-sm-2 margin-new-game">Image</label>
              <input className="col-6 col-sm-6 margin-new-game text" name="characterImage" onChange={imageHandler} type="file" />
              </div>
              <button className="button col-lg-1 col-sm-3 col-4 margin2" onClick={addNewCharacterHandler}>Add</button>
          </div>
          </div>
          <div className="d-flex justify-content-center">
              </div>
      </section>
    )
}

export default AddNewCharacter;