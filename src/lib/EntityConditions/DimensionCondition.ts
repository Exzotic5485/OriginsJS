import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class DimensionCondition extends BaseEntityAction {
    private dimension!: Identifier;


    constructor() {
        super()
        this.type = "origins:dimension";
    }

    

    setDimension(value: Identifier) {
        this.dimension = value;
            
        return this;
    }
}