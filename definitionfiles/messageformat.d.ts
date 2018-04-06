//-----------------------------------------------------------------------------------------------------------------------------------------------
// Option 1: Following typing similar library (https://github.com/yahoo/intl-messageformat/blob/master/index.d.ts)
//-----------------------------------------------------------------------------------------------------------------------------------------------
// Error: Could not find a declaration file for module 'messageformat'. 'node_modules/messageformat/lib/messageformat.js' implicitly has an 'any' type.

// declare class MessageFormat {
//     constructor(message: string);

//     compile: (messageSource: string) => Msg;

// }
// export type Msg = (params: {}) => string;
// export default MessageFormat;

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Option 2: Following declaration file https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html
//-----------------------------------------------------------------------------------------------------------------------------------------------
// Error: Could not find a declaration file for module 'messageformat'. 'node_modules/messageformat/lib/messageformat.js' implicitly has an 'any' type. 

declare class MessageFormat {
    constructor(message: string);

    compile: (messageSource: string) => MessageFormat.Msg;

}
declare namespace MessageFormat {
    type Msg = (params: {}) => string;
}
export = MessageFormat;

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Option 3: From Ryan Cavanaugh comment https://github.com/Microsoft/TypeScript/issues/23185
//-----------------------------------------------------------------------------------------------------------------------------------------------
// Error:  Cannot use 'new' with an expression whose type lacks a call or construct signature.

// declare module "messageformat" {
//     export type Msg = (params: {}) => string;
//     export interface MessageFormat {
//         new(message: string): any;
//         compile: (messageSource: string) => Msg;
//     }
// }
