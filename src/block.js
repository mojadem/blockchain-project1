const crypto = require("crypto");

function SHA256(message) {
    return crypto
        .createHash("sha256")
        .update(message)
        .digest("hex");
}

class Block {
    
    constructor(prevHash = "", transactions = []) {
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.hash = this.getHash();
        this.prevHash = prevHash;
        this.nonce = 0;

        this.mine();
    }

    getHash() {
        let txStr = "";

        for (let i = 0; i < this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }

        return SHA256(
            this.prevHash + this.timestamp + txStr + this.nonce
        );
    }

    mine() {
        let checkString = Array(global.difficulty + 1).join("0");

        let tries = 0;
        while (!this.hash.startsWith(checkString)) {
            this.nonce++;
            this.hash = this.getHash();
            tries++;
        }

        console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
    }

    prettify() {
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;
        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;
        
        blockStr += `<div><b>Transactions:</b><div>`
        for (let i = 0; i < this.transactions.length; i++) {
            blockStr += "    " + this.transactions[i].prettify();
        }
        blockStr += "</div>";

        return blockStr;
    }
}

module.exports = Block;