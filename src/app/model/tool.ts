import { TEMP_TOOLS } from '../testdata/const-tools';

export class Tool {
    name: String;
    replacements: Tool[];

    constructor(name: String) {
        this.replacements = [];
        for (let i = 0; i < TEMP_TOOLS.length; i++) {
            if (name === TEMP_TOOLS[i].name) {
                this.replacements = TEMP_TOOLS[i].replacements;
                this.name = name;
                break;
            }
        }
    }
}
