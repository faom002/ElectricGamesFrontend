import { useState, createContext, FC, ReactNode, useEffect, useRef } from "react";
import IConsole from "../interfaces/IConsole";
import IConsoleContext from "../interfaces/IConsoleContext";
import ConsolesService from "../services/ConsolesService";

export const ConsoleContext = createContext<IConsoleContext | null>(null)

interface Props{
    children: ReactNode,
}

export const ConsoleProvider : FC<Props> = ({children}) => {

  const [consoleArray, setConsole] = useState<IConsole[]>([]);

  useEffect(
    ()=>{
        getAllConsoles();
    }, [consoleArray.length]
  )

  const getAllConsoles = async() => {
    const allConsoles = await ConsolesService.getAllConsoles()
    setConsole(allConsoles);
  }

  const getConsoleById = async(id: number) => {
    var console = await ConsolesService.getConsoleById(id);
  }

  const getConsoleByName = async(name: string) => {
    const getConsoleByName = await ConsolesService.getConsoleByName(name);
  }

  const getConsoleByPriceRange = async(minPrice: number, maxPrice: number) => {
    const getConsoleByPrceRange = await ConsolesService.getConsoleByPriceRange(minPrice, maxPrice);
  }

  const addConsole = async (console: IConsole) => {
    setConsole( [ console, ...consoleArray ] );
    await ConsolesService.postConsole(console);
  }

  const putConsole = async (console: IConsole) => {
    setConsole( [console, ...consoleArray] );
    await ConsolesService.putConsole(console);
  }

  const deleteConsoleById = async (id: number) => {
    await ConsolesService.deleteConsole(id);
    const newConsoleArray = consoleArray.filter(console => console.id !== id);
    setConsole(newConsoleArray);
  }

  return(
    <ConsoleContext.Provider value={{consoleArray, addConsole, putConsole, getConsoleByName, getConsoleByPriceRange, deleteConsoleById}}>
        {children}
    </ConsoleContext.Provider>
  )
}