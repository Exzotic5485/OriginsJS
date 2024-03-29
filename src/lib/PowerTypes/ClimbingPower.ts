import { PowerOptions, EntityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ClimbingPower extends BasePower {
    private allow_holding: boolean = true;
    private hold_condition?: EntityConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:climbing";
    }

    

    setAllowHolding(value: boolean) {
        this.allow_holding = value;
            
        return this;
    }

    setHoldCondition(value: EntityConditionType) {
        this.hold_condition = value;
            
        return this;
    }
}