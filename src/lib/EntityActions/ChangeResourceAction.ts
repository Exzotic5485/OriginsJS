import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ChangeResourceAction extends BaseEntityAction {
    private resource!: Identifier;
    private change!: number;
    private operation: string = "add";


    constructor() {
        super()
        this.type = "origins:change_resource";
    }

    

    setResource(value: Identifier) {
        this.resource = value;
            
        return this;
    }

    setChange(value: number) {
        this.change = value;
            
        return this;
    }

    setOperation(value: string) {
        this.operation = value;
            
        return this;
    }
}