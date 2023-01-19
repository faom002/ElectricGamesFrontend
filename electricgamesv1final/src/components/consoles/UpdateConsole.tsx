import { useState, useContext, ChangeEvent } from "react";
import { ConsoleContext } from "../../contexts/ConsoleContext";
import IConsole from "../../interfaces/IConsole";
import IConsoleContext from "../../interfaces/IConsoleContext";
import ImageUploadService from "../../services/ImageUploadService";
import ConsolesService from "../../services/ConsolesService";


const UpdateConsole = () => {

    const { putConsole } = useContext(ConsoleContext) as IConsoleContext;


    const [id, setId] = useState<string>("Id not set");
    const [consoleName, setName] = useState<string>("Name not set");
    const [consolePrice, setPrice] = useState<string>("Price not set");
    const [consoleImage, setImage] = useState<any>();
    const [consoleImageFileName, setFileName] = useState<string>("");


    const getSpecifiedConsole = async () => {
        var console = await ConsolesService.getConsoleById(parseInt(id));
        setName(console.consoleName);
        setPrice(console.consolePrice);
        setFileName(console.consoleImage)
    }

    const imageHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        const {files} = e.currentTarget; 
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
          case "consoleName":
              setName( value );
          break;
          case "consolePrice":
              setPrice( value );
          break;
          case "consoleImage":
              setImage( value );
          break;
        
          default:
            break;
        }
    }

 

    const editConsole = () => {
        
        
        const console : IConsole = {
            id: parseInt(id),
            consoleName: consoleName,
            consolePrice: parseInt(consolePrice),
            consoleImage: consoleImageFileName
        };
        if(consoleImage != null){
            ImageUploadService.uploadImage(consoleImage);
            putConsole(console);
            alert("edited console successfully with image")
        }else{
            putConsole( console );
            alert("edited console successfully without image")
        }


    }
        

    return (
      <section className="margin">
          <h3 className="h1">Update console</h3>
          <div className="container">
          <div className="row">
          <div className="margin-bottom">
            <label className="col-3 col-sm-2 margin-new-game">Id</label>
            <input className="col-3 col-sm-6 margin-new-game" name='id' onChange={changeHandler} type="text" value={id} />
            <button onClick={getSpecifiedConsole}>Get Console</button>
          </div>
          <div>
            <label className="col-3 col-sm-2 margin-new-game">Name</label>
            <input className="col-6 col-sm-6 margin-new-game" name="consoleName" value={consoleName} onChange={changeHandler} type="text" />
            </div>
            
            <div>
            <label className="col-3 col-sm-2 margin-new-game">Price</label>
            <input className="col-6 col-sm-6 margin-new-game" name="consolePrice" value={consolePrice} onChange={changeHandler} type="number" />
            </div>
            
            <div>
            <label className="col-3 col-sm-2 margin-new-game">Image</label>
            <input className="col-6 col-sm-6 margin-new-game" name="consoleImage" onChange={imageHandler} type="file" /> 
            </div>
            
            <button className="col-lg-1 col-sm-3 col-4 margin2 button" onClick={editConsole}>Update</button>
          </div>
          </div>
          
      </section>
    )
}

export default UpdateConsole;