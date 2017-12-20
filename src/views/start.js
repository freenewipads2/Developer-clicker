import { inject } from 'aurelia-framework';
import {LocalStorageHelper } from 'helpers/local-storage-helper';
import {User} from 'library/user';
@inject(LocalStorageHelper,User)
export class Start{
    constructor(localStorageHelper){
        this.localStorageHelper = localStorageHelper;
        this.name = "defaultUser";
        this.folder = "click-enter";

        this.cmdInput = "";
        this.lastCmdInput = "";

        this.replies = [];
        this.canInput = true;
    }

    submit(e){
        if(e.key == "Enter"){
            let reply = "-bash " + this.cmdInput + ": Command does not exist";
            this.addReply(this.name + "-MacBook-Pro:" + this.folder + " " + this.name + "$ " + this.cmdInput);

            if(this.cmdInput == "help"){
                this.addReply("Start new game au run --watch");
                this.addReply("Load game au run env --username --watch");
            }

            else if(this.cmdInput.includes("au run") && this.cmdInput.includes("--watch")){
                this.canInput = false;
                if(this.cmdInput.includes("env")){
                    this.user = this.cmdInput.split("--")[1].substr(3,this.cmdInput.split("--")[1].length);
                    this.addReply("Loading "+ this.user);
                    if(this.localStorageHelper.getStorage(this.user + "_save")){
                        this.build();
                    } else {
                        setTimeout(x =>{
                        this.addReply("User "+ this.user + " does not exist.");
                        this.canInput = true;
                        },500);
                    }
                }
                else {
                    this.addReply("Creating new user");
                    this.user = new User(this.name, 0,[]);                    
                    this.build();
                }
            }
            
            else {
                this.addReply(reply);
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
                this.addReply("Tracing " + Math.random().toString(36).substr(2, 36) + "...");
            },Math.floor((Math.random() * 1000) + 1));
        }

        setTimeout(x =>{
            this.addReply("Refreshing the browser");
            this.startGame();
        },5000);
    }

    startGame(){

        setInterval(x =>{
            this.user.setUnits(1);
            this.addReply(this.user.name + " units incresed by " + this.user.units);
        },1000);

    }
    addReply(reply){
        this.replies.push(reply);
        document.getElementById("body").scrollTo(0,document.getElementById("body").scrollHeight);
    }
}