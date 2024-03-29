import { Identifier } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class BlockCondition extends BaseBlockAction {
    private block!: Identifier;


    constructor() {
        super()
        this.type = "origins:block";
    }

    

    setBlock(value: Identifier) {
        this.block = value;
            
        return this;
    }
}