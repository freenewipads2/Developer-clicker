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
                name: Math.random().toString(36).substr(2, 6),//Math.random().toString(36).substr(2, 5),
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
    parse(obj){
      this.name = obj.name;
      this.units = obj.units;
      this.upgrades.currentUpgrades = obj.currentUpgrades;
    }
    updateUnits(){
        let totalModifier = this.upgrades.getTotalModifier() + 1;
        this.units += 1 * totalModifier;
    }
    setUnits(i){
        this.units += i;
    }
    buyUpgrade(name, ammount){
            let index = null;
            for(let i = 0; i!=this.upgrades.currentUpgrades.length; i++ ){
              if(this.upgrades.currentUpgrades[i].name == name){
                index = i;
              }
            }
            if(this.units > this.upgrades.currentUpgrades[name].cost * ammount){
                this.setUnits(-this.upgrades.currentUpgrades[name].cost * ammount);
                this.upgrades.currentUpgrades[name].cost;
                this.upgrades.currentUpgrades[name].level += ammount;
                return true;
            }
            else {
                return false;
            }

    }

}
