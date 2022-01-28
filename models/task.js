const db = require('../config/database');

class Task{
    constructor(title='title', description='description'){
        this.title = title;
        this.description = description;
    }

    async getTaskbyId(id) {
        try{
            const { rows } = await db.query(
                `SELECT * FROM tasks WHERE task_id = $1;`,
                [id]
            );
            
            return rows;
        }catch(error){
            throw error;
        }
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

    async updateTask(id){
        try{
            const { rows } = await db.query(
                `UPDATE tasks SET name=$1, description=$2 WHERE task_id=$3;`,
                [this.title, this.description, id]
            )
            return rows;
        }catch(error){
            throw error;
        }
    }

    async deleteTask(id){
        try{
            const { rows } = await db.query(
                `DELETE FROM tasks WHERE task_id=$1;`,
                [id]
            )
            return rows;
        }catch(error){
            throw error;
        }
    }
}

module.exports = Task;