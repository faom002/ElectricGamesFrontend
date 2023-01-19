import axios from 'axios';
import IConsole from '../interfaces/IConsole';

const ConsolesService = (
  () => {

    const consoleEndpoints = {
      consoles: "https://localhost:7226/Consoles",
      consoleByName: "https://localhost:7226/Consoles/GetByName?",
      consoleByPriceRange: 'https://localhost:7226/Consoles/GetByPriceRange?'
    }

    const getAllConsoles = async () => {
      const result = await axios.get(consoleEndpoints.consoles);
      console.log(result.data);
      return result.data;
    }

    const getConsoleById = async(id: number) => {
      const result = await axios.get(`${consoleEndpoints.consoles}/${id}`);
      return result.data;
    }

    const getConsoleByName = async(name: string) => {
      const result = await axios.get(`${consoleEndpoints.consoleByName}consoleNameFromDb=${name}`);
      return result.data;
    }

    const getConsoleByPriceRange = async(minPrice: number, maxPrice: number) => {
      const result = await axios.get(`${consoleEndpoints.consoleByPriceRange}minPrice=${minPrice}&maxPrice=${maxPrice}`);
      return result.data;
    }

    const postConsole = async (c: IConsole) => {
        const result = await axios.post(consoleEndpoints.consoles, c);
        console.log(result);
        
    }

    const putConsole = async (c: IConsole) => {
      const result = await axios.put(consoleEndpoints.consoles, c);
      return result.data;
    }

    const deleteConsole = async (id: number) => {
      const result = await axios.delete(`${consoleEndpoints.consoles}/${id}`)
      console.log(result);
      return result;
    }

    return {
      getAllConsoles,
      getConsoleByName,
      getConsoleByPriceRange,
      getConsoleById,
      postConsole,
      putConsole,
      deleteConsole
    }

  }
)();

export default ConsolesService;