const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
// const receiveFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);


//  `db.json` file on the backend that will be used to store and retrieve notes using the fs module.
class Store{
    read(){
        return readFileAsync ("./db/db.json", "utf8")
    };

    receive(note, callback){

        console.log("NOTE", note)
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) console.log(err);

            let getData = JSON.parse(data);
            getData.push(note);

            fs.writeFile("./db/db.json", JSON.stringify(getData), (err) =>{
                if (err) {
                    console.log(err);
                } 
                    return callback(getData);
            })
        })
        
        // return receiveFileAsync ("./db/db.json", "notes");
    };
    // delete(){
    //     return fs.writeFile ("./db.json", "utf8")
    // };



};


module.exports = Store;

