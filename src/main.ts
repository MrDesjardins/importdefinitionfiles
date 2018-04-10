import MessageFormat from "messageformat";

export function localize(key: string, params: {}): string {
    const mf = new MessageFormat("en");
    // Read the file here
    // Get the ICU string from the file
    const msg = mf.compile("test");
    return msg({});
}