import { useState, useContext, ChangeEvent } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacter from "../../interfaces/ICharacter";
import ICharacterContext from "../../interfaces/ICharacterContext";
import ImageUploadService from "../../services/ImageUploadService";
import CharacterService from "../../services/CharacterService";


const UpdateCharacter = () => {

    const { putCharacter } = useContext(CharacterContext) as ICharacterContext;


    const [id, setId] = useState<string>("Id not set");
    const [characterName, setName] = useState<string>("Name not set");
    const [characterGame, setGame] = useState<string>("Game not set");
    const [characterAge, setAge] = useState<string>("Age not set");
    const [characterImage, setImage] = useState<any>();
    const [characterImageFileName, setFileName] = useState<string>("");


    const getSpecifiedCharacter = async () => {
        var character = await CharacterService.getCharacterById(parseInt(id));
        console.log(character);
        setName(character.characterName);
        setGame(character.characterGame);
        setAge(character.characterAge);
        setFileName(character.characterImage)
    }

    const imageHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        const {files} = e.target; 
          if(files!=null){ 
            const file = files[0];
            setImage(file);
            setFileName(file.name)
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        switch (name) {
          case "id":
              setId( value );
          break;
          case "characterName":
              setName( value );
          break;
          case "characterGame":
              setGame( value );
          break;
          case "characterAge":
              setAge( value );
          break;
          case "characterImage":
              setImage( value );
          break;
        
          default:
            break;
        }
    }

 

    const editCharacter = () => {
        const character : ICharacter = {
            id: parseInt(id),
            characterName: characterName,
            characterGame: characterGame,
            characterAge: parseInt(characterAge),
            characterImage: characterImageFileName
        };

            
            console.log(character);
            if(characterImage != null){
                ImageUploadService.uploadImage(characterImage);
            putCharacter( character );
            alert("Edited character successfully with image")
        
            }
            else
            {
                putCharacter( character );
                alert("Edited character successfully without image")
            }
            
        
    }

    return (
      <section className="margin">
          <h3 className="h1">Update character</h3>
          <div className="container">
            <div className="row">
          <div className="margin-bottom">
          <label className="col-3 col-sm-2 margin-new-game">Id</label>
                <input className="col-3 col-md-6 margin-new-game" name='id' onChange={changeHandler} type="text" value={id} />
                <button className="col-3 col-md-1 margin-new-game" onClick={getSpecifiedCharacter}>Get</button>
          </div>
          
        
            <div>
              <label className="col-3 col-sm-2 margin-new-game">Name</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterName" value={characterName} onChange={changeHandler} type="text" />
              </div>
              
              <div>
              <label className="col-3 col-sm-2 margin-new-game">Game</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterGame" value={characterGame} onChange={changeHandler} type="text" />
              </div>
              
              <div>
              <label className="col-3 col-sm-2 margin-new-game">Age</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterAge" value={characterAge} onChange={changeHandler} type="number" />
              </div>

              <div>
              <label className="col-3 col-sm-2 margin-new-game">Image</label>
              <input className="col-6 col-sm-6 margin-new-game" name="characterImage" onChange={imageHandler} type="file" /> 
              </div>
              
              <button className="col-lg-1 col-sm-3 col-4 button margin2" onClick={editCharacter}>Update</button>
          </div>
          </div>
          
      </section>
    )
}

export default UpdateCharacter;