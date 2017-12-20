export class LocalStorageHelper{

    setStorage(varName,varValue){
        try{
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(varName,varValue);
            } else {
                console.warn("No local storage");
                // Sorry! No Web Storage support..
            }
        }catch(err){
            console.warn(err);
        }
    }
    getStorage(varName){
        if (typeof(Storage) !== "undefined") {
            return localStorage.getItem(varName);
        } else {
            console.warn("No local storage");
            // Sorry! No Web Storage support..
        }
    }

    setArray(varName,arr){        
        var stringValue = JSON.stringify(arr);        
        this.setStorage(varName,stringValue);        
        arr = stringValue;
    }
    getArray(varName){
        let arr = this.getStorage(varName);
        if(arr == null || arr == 'undefined'){
            return [];
        }
        return JSON.parse(arr);

    }

    hasItemInArray(varName,item){
        let arr = [];
        arr = this.getArray(varName);        
        if(arr.includes(item)){
            return true;
        }
        return false;
    }
    removeItemsFromArrray(varName,item){
        let arr = this.getArray(varName);        
        arr = arr.filter(currItem => currItem !== item);  
        this.setArray(varName,arr);          
    }

    addItemToArray(varName,item,returnArr){        
        let arr = this.getArray(varName);        
        arr.push(item);        
        this.setArray(varName,arr);           
        if(returnArr){
            return arr;
        }  
    }

    getArrayLength(varName){
        let arr = this.getArray(varName);   
        if(arr){
            return arr.length;
        }
        return 0;  
    }


};