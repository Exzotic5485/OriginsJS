import { PowerOptions, DamageSource, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class DamageOverTimePower extends BasePower {
    private interval: number = 20;
    private onset_delay?: number;
    private damage!: number;
    private damage_easy?: number;
    private damage_source?: DamageSource;
    private protection_enchantment?: Identifier;
    private protection_effectiveness: number = 1.0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:damage_over_time";
    }

    

    setInterval(value: number) {
        this.interval = value;
            
        return this;
    }

    setOnsetDelay(value: number) {
        this.onset_delay = value;
            
        return this;
    }

    setDamage(value: number) {
        this.damage = value;
            
        return this;
    }

    setDamageEasy(value: number) {
        this.damage_easy = value;
            
        return this;
    }

    setDamageSource(value: DamageSource) {
        this.damage_source = value;
            
        return this;
    }

    setProtectionEnchantment(value: Identifier) {
        this.protection_enchantment = value;
            
        return this;
    }

    setProtectionEffectiveness(value: number) {
        this.protection_effectiveness = value;
            
        return this;
    }
}