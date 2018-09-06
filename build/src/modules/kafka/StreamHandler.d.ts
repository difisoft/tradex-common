import { IConf } from "./types";
declare class StreamHandler {
    private hasError;
    private stream;
    constructor(conf: IConf, options: any, topics: string[], dataHandler: (data: any, handler: StreamHandler) => void);
    close(): void;
}
export { StreamHandler };