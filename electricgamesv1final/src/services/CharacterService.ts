import axios from 'axios';
import ICharacter from '../interfaces/ICharacter';

const CharacterService = (
  () => {

    const characterEndpoints = {
      characters: "https://localhost:7226/GameCharacter",
      characterByName: "https://localhost:7226/GameCharacter/GetByName?characterName"
    }

    const getAllCharacters = async () => {
      const result = await axios.get(characterEndpoints.characters);
      console.log(result.data);
      return result.data;
    }

    const getCharacterById = async(id: number) => {
      const result = await axios.get(`${characterEndpoints.characters}/${id}`);
      return result.data;
    }

    const getCharacterByName = async(name: string) => {
      const result = await axios.get(`${characterEndpoints.characterByName}=${name}`);
      return result.data;
    }

    const postCharacter = async (g: ICharacter) => {
        const result = await axios.post(characterEndpoints.characters, g);
        console.log(result);
        
    }

    const putCharacter = async (g: ICharacter) => {
      const result = await axios.put(characterEndpoints.characters, g);
      return result.data;
    }

    const deleteCharacter = async (id: number) => {
      const result = await axios.delete(`${characterEndpoints.characters}/${id}`)
      console.log(result);
      return result;
    }

    return {
      getAllCharacters,
      getCharacterByName,
      getCharacterById,
      postCharacter,
      putCharacter,
      deleteCharacter
    }

  }
)();

export default CharacterService;