import {  } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class NbtCondition extends BaseItemCondition {
    private nbt!: string;


    constructor() {
        super()
        this.type = "origins:nbt";
    }

    

    setNbt(value: string) {
        this.nbt = value;
            
        return this;
    }
}