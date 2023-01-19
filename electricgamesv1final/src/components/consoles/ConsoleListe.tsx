import { useContext } from "react";
import { ConsoleContext } from "../../contexts/ConsoleContext";
import IConsoleContext from "../../interfaces/IConsoleContext";
import ConsoleItem from "./ConsoleItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const ConsoleList = () => {

    const { consoleArray } = useContext(ConsoleContext) as IConsoleContext;

    const getConsoleItems = () => {
        return consoleArray.map( (consoles, i)  => (
            <ConsoleItem
              key={`console-${i}`}
              id={consoles.id}
              consoleName={consoles.consoleName}
              consolePrice={consoles.consolePrice}
              consoleImage={consoles.consoleImage}
            />
         ) );
    }

    return (
        <div>
        <section>
            <h3 className="h1">Consoles</h3>
            <p className="text margin">Number of consoles: {consoleArray.length}</p>
            <div className="container">
            <div className="row">{getConsoleItems()}</div>
            </div>
        </section>
        </div>
    )

}

export default ConsoleList;