import { useState, useContext, ChangeEvent } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGame from "../../interfaces/IGame";
import IGameContext from "../../interfaces/IGameContext";
import ImageUploadService from "../../services/ImageUploadService";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Test.css"


const AddNewGame = () => {

    const { addGame } = useContext(GameContext) as IGameContext;

    const [image, setImage] = useState<File | null>(null);

    const [newGame, setNewGame] = useState<IGame>({
        gameName: "",
        gameGenre: "",
        gamePlatform: "",
        gamePrice: 0,
        gameReleaseYear: 0,
        gameImage: ""
    });


    const gameObjecthandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setNewGame({...newGame,[name]: value});
    }


    const imageHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        const {files} = e.target; 
          if(files!=null){ 
            const file = files[0];
            setImage(file);

            newGame.gameImage = file.name


          }
        
      }

    
    const addNewGameHandler = () => {

        if(newGame != null && image != null){
            addGame(newGame); 
            ImageUploadService.uploadImage(image);
        }
      alert("Added new game")

    }

    return (
      <section className="margin">
          <h3 className="h1">Add a new game</h3>
          <div className="container">
            <div className="row">
                <div>
              <label className="col-2 margin-new-game">Name</label>
              <input className="col-5 margin-new-game" name="gameName" onChange={gameObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-2 margin-new-game">Genre</label>
              <input className="col-5 margin-new-game" name="gameGenre" onChange={gameObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-2 margin-new-game">Platform</label>
              <input className="col-5 margin-new-game" name="gamePlatform" onChange={gameObjecthandler} type="text" />
              </div>

              <div>
              <label className="col-2 margin-new-game">Price</label>
              <input className="col-5 margin-new-game" name="gamePrice" onChange={gameObjecthandler} type="number" />
              </div>
              
              <div>
              <label className="col-2 margin-new-game">Release Year</label>
              <input className="col-5 margin-new-game" name="gameReleaseYear" onChange={gameObjecthandler} type="number" />
              </div>
            
              <div>
              <label className="col-2 margin-new-game">Image</label>
              <input className="col-5 margin-new-game text" name="gameImage" onChange={imageHandler} type="file" />
              </div>
              <button className="col-lg-1 col-3 button margin2" onClick={addNewGameHandler}>Add</button>
          </div>
          </div>
          
      </section>
    )
}

export default AddNewGame;