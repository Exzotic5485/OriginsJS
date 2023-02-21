import BasePower from "./PowerTypes/BasePower";
import { Identifier, PowerType } from "./Types";

interface OriginOptions {
    name?: string,
    description?: string,
    icon?: string,
    impact?: number
}

export default class Origin {

    name?: string;
    description?: string;
    icon?: string;
    impact?: number;
    powers: PowerType[];
    order?: number;
    unchoosable?: boolean;

    constructor(options?: OriginOptions) {
        this.name = options?.name
        this.description = options?.description
        this.icon = options?.icon
        this.impact = options?.impact

        this.powers = []
    }

    addPower(power: PowerType) {
        this.powers.push(power)
    }

    addPowers(powers: PowerType[]) {
        for (let power of powers){
            this.addPower(power)
        }
    }

    setName(value: string) {
        this.name = value

        return this;
    }

    setDescription(value: string) {
        this.description = value

        return this;
    }

    setIcon(value: string) {
        this.icon = value

        return this;
    }

    setImpact(value: number) {
        this.impact = value

        return this;
    }

    setUnchoosable(value: boolean) {
        this.unchoosable = value

        return this;
    }

    setOrder(value: number) {
        this.order = value

        return this;
    }

    getNamespace() {
        return this.name ? this.name!.toLowerCase().replace(/\s+/g, "-") : "namespace";
    }

    getPowerReferences() {
        return this.powers.map((p) => p.getReference());
    }
}