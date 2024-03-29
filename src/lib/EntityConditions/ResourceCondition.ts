import { Identifier, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class ResourceCondition extends BaseEntityAction {
    private resource!: Identifier;
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:resource";
    }

    

    setResource(value: Identifier) {
        this.resource = value;
            
        return this;
    }

    setComparison(value: Comparison) {
        this.comparison = value;
            
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
            
        return this;
    }
}