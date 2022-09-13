import {ILogger} from "./ILogger";

export class ConsoleLogger implements ILogger {
    debug(...message: any[]): void {
        console.debug(...message);
    }

    error(...message: any[]): void {
        console.error(...message);
    }

    info(...message: any[]): void {
        console.info(...message);
    }

    log(...message: any[]): void {
        console.log(...message);
    }
}
