export class Start{
    constructor(){
        this.name = "defaultUser";
        this.folder = "click-enter";

        this.cmdInput = "";

        this.replies = [];
    }

    submit(e){
        if(e.key == "Enter"){
            let reply = "Command does not exist";
            if(this.cmdInput == "help"){
                reply = "Start new game by au run --watch<br><br>Load game by au run env --username --watch";
            }
            this.replies.push(this.cmdInput);
            this.replies.push(reply);
            this.cmdInput = "";
        } else {
            this.cmdInput += e.key;
        }
    }
}