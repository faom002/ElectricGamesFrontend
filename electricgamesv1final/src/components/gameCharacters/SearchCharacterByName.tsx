import { useState, useRef } from "react";
import ICharacter from "../../interfaces/ICharacter";
import CharacterItem from "./CharacterItem";
import CharacterService from "../../services/CharacterService";


const SearchCharacterByName = () => {

  const [character, setCharacter] = useState<ICharacter[]>([]);
  const characterNameElement = useRef<HTMLInputElement>(null);

  const getCharacterByName = async ()  => {
          if(characterNameElement.current){
          const characterName = characterNameElement.current.value;
          const chosenCharacter =  await CharacterService.getCharacterByName(characterName);
          setCharacter( chosenCharacter );
  }
  alert("Retrieved character")
  }

  const showCharacter = () => {
    return (
      character?.map((character: { characterName: string; characterGame: string; characterAge: number; characterImage: string; },i: number) => (
        <CharacterItem 
        key={`character-${i}`}
        characterName={character.characterName}
        characterGame={character.characterGame}
        characterAge={character.characterAge}
        characterImage={character.characterImage}
  />  
      ))
    
    )
  }  


  return (
      <section className="margin update-game-container">
          <h3 className="h1">Search For Character</h3>
          <div className="container">
          <div className="row">
          <div>
              <label className="col-3 col-sm-2 margin-new-game">Character Name</label>
              <input className="col-6 col-sm-6 margin-new-game" ref={characterNameElement} type="text"/>
          </div>
          <button className="button col-lg-1 col-sm-3 col-4 margin2" onClick={getCharacterByName}>Search</button>
          </div>
          </div>
          <div className="container">
          <div className="row">{showCharacter()}</div>
          </div>
          
      </section>
  )


}

export default SearchCharacterByName;