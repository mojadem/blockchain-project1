const fs = require("fs");

function loadRoutes(app) {
    fs.readdirSync(__dirname).forEach((file) => {
        let file_ext = file.substring(file.lastIndexOf(".") + 1);
        if (file === "index.js" || file_ext !== "js") {
            return;
        }

        let file_name = file.substring(0, file.indexOf("."));
        require("./" + file_name)(app);
    })
}

module.exports = loadRoutes;