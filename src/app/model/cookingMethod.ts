import { Tool } from './tool';

export class CookingMethod {
    operation: String[];
    temperature: number;
    time: number; // assumed in minutes
    tools: Tool[];
    next: CookingMethod;
}
