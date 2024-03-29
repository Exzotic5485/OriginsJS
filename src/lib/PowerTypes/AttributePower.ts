import { PowerOptions, AttributedAttributeModifier } from "../Types";
import BasePower from "./BasePower";

export default class AttributePower extends BasePower {
    private modifier?: AttributedAttributeModifier;
    private modifiers?: AttributedAttributeModifier[];
    private update_health: boolean = true;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:attribute";
    }

    

    setModifier(value: AttributedAttributeModifier) {
        this.modifier = value;
            
        return this;
    }

    setModifiers(value: AttributedAttributeModifier[]) {
        this.modifiers = value;
            
        return this;
    }

    setUpdateHealth(value: boolean) {
        this.update_health = value;
            
        return this;
    }
}