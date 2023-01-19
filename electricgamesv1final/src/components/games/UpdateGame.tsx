import { useState, useContext, ChangeEvent } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGame from "../../interfaces/IGame";
import IGameContext from "../../interfaces/IGameContext";
import ImageUploadService from "../../services/ImageUploadService";
import GameService from "../../services/GameService";
import '../../css/Test.css';


const UpdateGame = () => {

    const { putGame } = useContext(GameContext) as IGameContext;

    const [id, setId] = useState<string>("Id not set");
    const [gameName, setName] = useState<string>("Name not set");
    const [gameGenre, setGenre] = useState<string>("Genre not set");
    const [gamePlatform, setPlatform] = useState<string>("Platform not set");
    const [gamePrice, setPrice] = useState<string>("Price not set");
    const [gameReleaseYear, setReleaseYear] = useState<string>("Release Year not set");
    const [gameImage, setImage] = useState<any>();
    const [gameImageFileName, setFileName] = useState<string>("");


    const getSpecifiedGame = async () => {
        var game = await GameService.getGameById(parseInt(id));
        setName(game.gameName);
        setGenre(game.gameGenre);
        setPlatform(game.gamePlatform);
        setPrice(game.gamePrice);
        setReleaseYear(game.gameReleaseYear);
        setFileName(game.gameImage)
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
          case "gameName":
              setName( value );
          break;
          case "gameGenre":
              setGenre( value );
          break;
          case "gamePlatform":
              setPlatform( value );
          break;
          case "gamePrice":
              setPrice( value );
          break;
          case "gameReleaseYear":
              setReleaseYear( value );
          break;
          case "gameImage":
              setImage( value );
          break;
        
          default:
            break;
        }
    }

    const editGame = () => {
        const game : IGame = {
            id: parseInt(id),
            gameName: gameName,
            gameGenre: gameGenre,
            gamePlatform: gamePlatform,
            gamePrice: parseInt(gamePrice),
            gameReleaseYear: parseInt(gameReleaseYear),
            gameImage: gameImageFileName
        };
        if(gameImage != null){
            ImageUploadService.uploadImage(gameImage);
            putGame( game );
            alert("Edited game successfully with image")
        }else
        {
            putGame( game );
            alert("Edited game successfully without image")
        }
        
        }


    return (
      <section className="margin">
      <h3 className="h1">Update game</h3>
      <div className="container d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
      <div className="margin-bottom">
      <label className="col-3 col-sm-2 margin-new-game">Id</label>
            <input className="col-3 col-sm-6 margin-new-game" name='id' onChange={changeHandler} type="text" value={id} />
            <button onClick={getSpecifiedGame}>Get Game</button>
      </div>
      
        <div>
          <label className="col-3 col-sm-2 margin-new-game">Name</label>
          <input className="col-6 col-sm-6 margin-new-game" name="gameName" value={gameName} onChange={changeHandler} type="text" />
          </div>
          
          <div>
          <label className="col-3 col-sm-2 margin-new-game">Genre</label>
          <input className="col-6 col-sm-6 margin-new-game" name="gameGenre" value={gameGenre} onChange={changeHandler} type="text" />
          </div>
          
          <div>
          <label className="col-3 col-sm-2 margin-new-game">Platform</label>
          <input className="col-6 col-sm-6 margin-new-game" name="gamePlatform" value={gamePlatform} onChange={changeHandler} type="text" />
          </div>
          
          <div>
          <label className="col-3 col-sm-2 margin-new-game">Price</label>
          <input className="col-6 col-sm-6 margin-new-game" name="gamePrice" value={gamePrice} onChange={changeHandler} type="number" />
          </div>

          <div>
          <label className="col-3 col-sm-2 margin-new-game">Release Year</label>
          <input className="col-6 col-sm-6 margin-new-game" name="gameReleaseYear" value={gameReleaseYear} onChange={changeHandler} type="number" />
          </div>
          
          <div>
          <label className="col-3 col-sm-2 margin-new-game">Image</label>
          <input className="col-6 col-sm-6 margin-new-game text" name="gameImage" onChange={imageHandler} type="file" /> 
          </div>
          
          <button className="col-lg-1 col-sm-3 col-4 button margin2" onClick={editGame}>Update</button>
      </div>
    </div>
  </section>
          
    )
}

export default UpdateGame;