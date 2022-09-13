import { NullLogger } from "./NullLogger";
import { ConsoleLogger } from "./ConsoleLogger";
import { ILogger } from "./ILogger";

let logger = new ConsoleLogger();
export const configureLogger = {
  enableConsole: () => {
    logger = new ConsoleLogger();
  },
  setLogger: (newLogger: ILogger) => {
    logger = newLogger;
  },
  disable: () => {
    logger = new NullLogger();
  }
}

export default logger;