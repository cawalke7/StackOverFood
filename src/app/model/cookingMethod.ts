import { Tool } from './tool';

export class CookingMethod {
    operation: String;
    temperature: number; // Assume in F, not C yet
    time: number; // assumed in minutes
    tools: Tool[];
    next: CookingMethod;

    constructor(operation: String) {
        this.operation = operation;
        this.temperature = 0;
        this.time = 0;
        this.tools = [];
        this.next = null;
    }
}
