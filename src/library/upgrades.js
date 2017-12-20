import { inject } from 'aurelia-framework';
export class Upgrades{
    constructor(){
        this.currentUpgrades = [];
    }

    addUpgrade(upgrade){
        this.currentUpgrades[upgrade.name] = upgrade;
    }

}