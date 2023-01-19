import IConsole from './IConsole'


interface IConsoleContext {

    consoleArray: IConsole[]

    addConsole: (console: IConsole) => void;

    putConsole: (console: IConsole) => void;

    getConsoleByName: (name: string) => void;

    getConsoleByPriceRange: (minPrice: number, maxprice: number) => void;

    deleteConsoleById: (id: number) => void;



}

export default IConsoleContext;