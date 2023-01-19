import { useState, createContext, FC, ReactNode, useEffect } from "react";
import ICharacter from "../interfaces/ICharacter";
import ICharacterContext from "../interfaces/ICharacterContext";
import CharacterService from "../services/CharacterService";

export const CharacterContext = createContext<ICharacterContext | null>(null)

interface Props{
    children: ReactNode,
}

export const CharacterProvider : FC<Props> = ({children}) => {

  const [characterArray, setCharacter] = useState<ICharacter[]>([]);

  useEffect(
    ()=>{
        getAllCharacters();
    }, [characterArray.length]
  )

  const getAllCharacters = async() => {
    const allCharacters = await CharacterService.getAllCharacters();
    setCharacter(allCharacters);
  }

  const getCharacterById = async(id: number) => {
    var character = await CharacterService.getCharacterById(id);
  }

  const getCharacterByName = async(name: string) => {
    const getGameByName = await CharacterService.getCharacterByName(name);
  }

  const addCharacter = async (character: ICharacter) => {
    setCharacter( [ character, ...characterArray ] );
    await CharacterService.postCharacter(character);
  }

  const putCharacter = async (character: ICharacter) => {
    setCharacter( [character, ...characterArray] );
    await CharacterService.putCharacter(character)
  }

  const deleteCharacterById = async (id: number) => {
    await CharacterService.deleteCharacter(id);
    const newCharacterArray = characterArray.filter(character => character.id !== id);
    setCharacter(newCharacterArray);
  }

  return(
    <CharacterContext.Provider value={{characterArray, addCharacter, putCharacter, getCharacterByName, deleteCharacterById}}>
        {children}
    </CharacterContext.Provider>
  )
}