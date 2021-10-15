const sha256 = require('crypto-js/sha256')

difficulty = 4;

class Block{
    constructor(index = 0, previousHash = null, data = 'Bloco Genesis'){
        this.index = index;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = new Date();
        this.hash = this.generateHash();
        this.nonce = 0;            
    }

    generateHash(){
        let validateHash = 1234565432123456543212345654321;
        let validateNonce = 0;
        let minerDifficulty = '';
        let blockMined = false;
        
        for(let i = 0; i < difficulty;i++){
            minerDifficulty = minerDifficulty + "0";
        }
        

        while(!blockMined){
            if(validateHash.toString().substr(0,difficulty).toString() != minerDifficulty.toString()){
                console.log("m:"+validateHash.toString().substr(0,difficulty));
                console.log("c:"+validateHash.toString().substr(0,difficulty));
                validateNonce++;
                validateHash = sha256(validateNonce + this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString();        
                console.log("Minerando: ");
                console.log("Nonce: "+ validateNonce + " | Hash:" + validateHash); 
                this.nonce = validateNonce;
            }else{
                blockMined = true;
                console.log("igual")
            }      
        }             
      

        console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*");
        console.log("Bloco Minerado!");
        console.log("Nonce válido: "+ validateNonce + " | Hash do bloco:" + validateHash);
        console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*");

        return validateHash;
    }
}

module.exports = Block;