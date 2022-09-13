import {ILogger} from "./ILogger";

export class NullLogger implements ILogger {
    debug(..._message: any[]): void {}
    error(..._message: any[]): void {}
    info(..._message: any[]): void {}
    log(..._message: any[]): void {}
}
