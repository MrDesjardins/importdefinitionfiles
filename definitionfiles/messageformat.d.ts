
declare module messageformat {
    export type Msg = (params: {}) => string;
    export interface MessageFormat {
        new(message: string): any;
        compile: (messageSource: string) => Msg;
    }
}