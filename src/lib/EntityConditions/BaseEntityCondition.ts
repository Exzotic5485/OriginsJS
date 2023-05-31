export default class BaseEntityCondition {
    public type: string;
    public inverted?: boolean;

    constructor() {
        this.type = "";
    }

    setInverted(value: boolean) {
        this.inverted = value;

        return this;
    }
}