const db = require('../config/database');

class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    async createTask () {
        try{
            const { rows } = await db.query(
                `INSERT INTO tasks (name, description) VALUES ($1, $2);`,
                [this.title, this.description]
            );
            
            return rows;
        }catch(error){
            throw error;
        }
    }

    static async getAllTasks(){
        try{
            const { rows } = await db.query(
                'SELECT * FROM tasks;'
            );
            
            return rows;
        }catch(error){
            throw error;
        }
    }
}

module.exports = Task;