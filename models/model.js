const db = require('../config/database');

class Model{
    constructor(){
        this.init();
    }

    init(){
        this.db = db;
    }

    getDB(){
        return this.db;
    }
}

module.exports = Model;