function validate(app) {
    app.get("/validate", (request, response) => {
        let isValid = global.blockchain.isChainValid();

        let responseStr = "";
        if (isValid) {
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid!";
        }

        response.status(200).send(responseStr);
    });
}

module.exports = validate;