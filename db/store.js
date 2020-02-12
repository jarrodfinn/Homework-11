const fs = require("fs");
//  `db.json` file on the backend that will be used to store and retrieve notes using the fs module.
class Store{
    read(){
        return fs.readFile ("./db.json", "utf8")
    }
    receive(){
        return fs.writeFile ("./db.json", "utf8")
    }



};
module.exports = Store;

