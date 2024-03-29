import {  } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class ExecuteCommandAction extends BaseBlockAction {
    private command!: string;


    constructor() {
        super()
        this.type = "origins:execute_command";
    }

    

    setCommand(value: string) {
        this.command = value;
            
        return this;
    }
}