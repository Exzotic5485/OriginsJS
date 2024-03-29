import { EntityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class EitherCondition extends BaseBientityCondition {
    private condition!: EntityConditionType;


    constructor() {
        super()
        this.type = "origins:either";
    }

    

    setCondition(value: EntityConditionType) {
        this.condition = value;
            
        return this;
    }
}