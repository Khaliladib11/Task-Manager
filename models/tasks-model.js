const model = require('./model');

class Task extends model{
    constructor(){
        super();
    }

    async getAllTasks(){
        try{
            const { rows } = await this.getDB().query(
                'SELECT * FROM tasks;'
            );
            return rows;
        }catch(error){
            throw error;
        }
    }

    async getTaskbyId(id) {
        try{
            const { rows } = await this.getDB().query(
                `SELECT * FROM tasks WHERE task_id = $1;`,
                [id]
            );
            return rows;
        }catch(error){
            throw error;
        }
    }

    async createTask (title, description) {
        try{
            const { rows } = await this.getDB().query(
                `INSERT INTO tasks (name, description) VALUES ($1, $2) RETURNING *;`,
                [title, description]
            );
            return rows;
        }catch(error){
            throw error;
        }
    }

    async updateTask(id, title, description){
        try{
            const { rows } = await this.getDB().query(
                `UPDATE tasks SET name=$1, description=$2 WHERE task_id=$3 RETURNING *;`,
                [title, description, id]
            )
            return rows;
        }catch(error){
            throw error;
        }
    }

    async deleteTask(id){
        try{
            const { rows } = await this.getDB().query(
                `DELETE FROM tasks WHERE task_id=$1 RETURNING *;`,
                [id]
            ) 
            return rows;
        }catch(error){
            throw error;
        }
    }
}

module.exports = Task;