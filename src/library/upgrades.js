import { inject } from 'aurelia-framework';
export class Upgrades{
    constructor(){
        this.currentUpgrades = [];
    }

    addUpgrade(upgrade){
        this.currentUpgrades.push(upgrade);
    }
    getTotalModifier(){
        let total = 0;
        for(let upgrade in this.currentUpgrades){
            total += this.currentUpgrades[upgrade].modifier * this.currentUpgrades[upgrade].level;
        }
        return total;
    }

}
