export default class AndAction {
    public type: string;
    public actions: any[];

    constructor() {
        this.type = "origins:and";
        this.actions = [];
    }

    add(...params: any[]) {
        this.actions.push(...params);
            
        return this;
    }
}