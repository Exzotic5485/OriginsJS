import { Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class BlastResistanceCondition extends BaseBlockAction {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:blast_resistance";
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