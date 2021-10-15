const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock("");

console.log(blockchain.isValid());

blockchain.blocks.forEach(block => {
    console.log('--------------------------------------------------------------------')
    console.log("Index: " + block.index)
    console.log("Nonce: " + block.nonce) 
    console.log("Hash: " + block.hash)
    console.log("Hash do bloco anterior: " + block.previousHash)    
    console.log("Dados: " +block.data)
});