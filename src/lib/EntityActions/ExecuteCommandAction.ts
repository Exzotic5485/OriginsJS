import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ExecuteCommandAction extends BaseEntityAction {
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