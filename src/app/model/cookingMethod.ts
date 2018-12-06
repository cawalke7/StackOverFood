import { Tool } from './tool';

export class CookingMethod {
    operation: String;
    temperature: number; // Assume in F, not C yet
    time: number; // assumed in minutes
    tools: Tool[];
    next: CookingMethod;

    constructor(operation: String, temperature: number, time: number, tools: Tool[], next: CookingMethod) {
        this.operation = operation;
        this.temperature = temperature;
        this.time = time;
        this.tools = tools;
        this.next = next;
    }
}
