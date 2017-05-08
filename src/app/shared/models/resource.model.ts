import { ResourceLine } from './resource-line.model';

export class Resource {
    id: number;
    name: string;
    description: string;
    resourceLines: ResourceLine[];
    createdDate: Date;

    constructor(id: number, name: string, description: string, resourceLines: ResourceLine[], createdDate: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.resourceLines = resourceLines;
        this.createdDate = createdDate;
    }
}