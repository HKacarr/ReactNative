import {makeObservable, observable, computed, action, makeAutoObservable} from 'mobx';

class MainStore{
    name = "Hasan Kacar";

    constructor() {
        makeAutoObservable(this)
    }


    @action getName() {
        return this.name;
    }

    @action setName(name) {
        this.name = name;
    }
}

export default new MainStore();
