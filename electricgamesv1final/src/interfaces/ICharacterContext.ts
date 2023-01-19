import ICharacter from './ICharacter'


interface ICharacterContext {

    characterArray: ICharacter[]

    addCharacter: (character: ICharacter) => void;

    putCharacter: (character: ICharacter) => void;

    getCharacterByName: (name: string) => void;

    deleteCharacterById: (id: number) => void;



}

export default ICharacterContext;