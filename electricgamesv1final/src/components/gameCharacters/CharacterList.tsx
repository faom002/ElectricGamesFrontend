import { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import CharacterItem from "./CharacterItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Test.css'

const CharacterList = () => {

    const { characterArray } = useContext(CharacterContext) as ICharacterContext;

    const getCharacterItems = () => {
        return characterArray.map( (characters, i)  => (
            <CharacterItem
              key={`game-${i}`}
              id={characters.id}
              characterName={characters.characterName}
              characterGame={characters.characterGame}
              characterAge={characters.characterAge}
              characterImage={characters.characterImage}
            />
         ) );
    }

    return (
        <div>
        <section>
            <h3 className="h1">Game Characters</h3>
            <p className="text margin">Number of characters: {characterArray.length}</p>
            <div className="container">
            <div className="row">{getCharacterItems()}</div>
            </div>
        </section>
        </div>
    )

}

export default CharacterList;