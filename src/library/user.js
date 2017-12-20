import { inject } from 'aurelia-framework';
import {Upgrades} from 'library/upgrades';
@inject(Upgrades)
export class User{
    constructor(upgrades){
        this.upgrades = upgrades;
        this.name = "defaultName";
        this.units = 0;

        for(let i = 0; i != 20; i++){
            this.upgrades.addUpgrade({
                name: Math.random().toString(36).substr(2, 5),
                cost: Math.floor((Math.random() * (10 * i)) + 1),
                level : 0,
                modifier: Math.floor((Math.random() * (10 * i)) + 1),
            });

        }
    }

    init(name, units, upgrades){
        this.name = name;
        this.units = units;
    }
    setUnits(i){
        this.units += i;
    }
    buyUpgrade(name){
        if(this.state.user.units > this.upgrades.currentUpgrades[name].cost){
            this.state.user.setUnits(-his.currentUpgrades[name].cost);
            this.upgrades.currentUpgrades[name].cost;
            this.upgrades.currentUpgrades[name].level++;
        }
    }

}