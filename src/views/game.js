import { inject } from 'aurelia-framework';
import {LocalStorageHelper } from 'helpers/local-storage-helper';
import {GameState} from 'library/game-state';
@inject(LocalStorageHelper,GameState)
export class Game{
    constructor(localStorageHelper, GameState){
        this.localStorageHelper = localStorageHelper;
        this.state = GameState;
        this.defaultName = "defaultUser";
        this.folder = "click-enter";

        this.cmdInput = "";
        this.lastCmdInput = "";

        this.replies = [];
    }

    attached(){
        this.state.addReply("Last login: 1 Jan 1970 00:00:00");


    }

    submit(e){
        if(e.key == "Enter"){
            let reply = "-bash " + this.cmdInput + ": Command does not exist";
            this.state.addInput(this.state.user.name + "$ " + this.cmdInput);

            if(this.cmdInput == "help"){
                this.state.addInput("Start new game: au run --watch");
                this.state.addInput("Load saved game: au run env --username --watch");
                this.state.addInput("Kill instance: die");
                this.state.addInput("Clear inputs: clean");
                this.state.addInput("View all upgrades: upgrade -v all")
                this.state.addInput("Buy upgrade: upgrade -up [upgrade] -a [ammount]");
            }
            else if(this.cmdInput == "clean"){
                this.state.inputs = [];
            }
            else if(this.cmdInput == "upgrade -v all"){
                this.state.addInput("NAME | LEVEL | COST | MODIFIER");
                for(let upgrade in this.state.user.upgrades.currentUpgrades){
                    this.state.addInput(this.state.user.upgrades.currentUpgrades[upgrade].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.state.user.upgrades.currentUpgrades[upgrade].level + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.state.user.upgrades.currentUpgrades[upgrade].cost + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.state.user.upgrades.currentUpgrades[upgrade].modifier);
                }
            }
            else if(this.cmdInput == "die"){
                this.state.killGame();
            }
            else if(this.cmdInput.includes("upgrade -up")){
                let ammount = this.cmdInput.split("-a ")[1];
                let upgrade = this.cmdInput.split("-up ")[1];
                upgrade = upgrade.split(" ")[0];
                if(ammount < 1){
                    this.state.addInput("No ammount specified, set to 1");
                    ammount = 1;
                }
                if(this.state.user.upgrades.currentUpgrades[upgrade]){
                    if(this.state.user.buyUpgrade(upgrade, ammount)){
                        this.state.addInput(upgrade + " modified");

                    } else {
                        this.state.addInput("You do not have enought units.");
                    }
                } else {
                    this.state.addInput(upgrade + " does not exist");
                }

            }

            else if(this.cmdInput.includes("au run") && this.cmdInput.includes("--watch") && !this.state.isRunning){
                this.state.canInput = false;
                if(this.cmdInput.includes("env")){
                    this.user = this.cmdInput.split("--")[1].substr(3,this.cmdInput.split("--")[1].length);
                    this.state.addReply("Loading "+ this.user);
                    if(this.localStorageHelper.getStorage(this.user + "_save")){
                        this.build();
                    } else {
                        setTimeout(x =>{
                        this.state.addReply("User "+ this.user + " does not exist.");
                        this.state.canInput = true;
                        },500);
                    }
                }
                else {
                    this.state.addReply("Creating new user");
                    this.state.user.init(this.defaultName, 0,[]);                    
                    this.build();
                }
            }
            
            else {
                this.state.addInput(reply);
            }

            
            this.lastCmdInput = this.cmdInput;
            this.cmdInput = "";
        } else {
            this.cmdInput += e.key;
        }
    }

    build(){
        for(let i = 0;i != 100;i++){
            setTimeout(x =>{
                this.state.addReply("Tracing " + Math.random().toString(36).substr(2, 36) + "...");
            },Math.floor((Math.random() * 1000) + 1));
        }

        setTimeout(x =>{
            this.state.addReply("Refreshing the browser");
            this.state.startGame();
        },5000);
    }

}