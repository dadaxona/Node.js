const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'livewire'
});

const getUsers = (request, response) => {
  
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({results})
  })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    connection.query('SELECT * FROM posts WHERE id =  ' + [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results)
    })
  }
  
  const createUser = (request, response) => {
    const { name, email, password } = request.body;
    connection.query('INSERT INTO posts (name, email, password) VALUES (?,?,?)', [name, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({results})
    })
  }
  
  const updateUser = (request, response) => {

    const id = parseInt(request.params.id);
    const param = request.body;
    console.log(request.body);
    const sql = "UPDATE posts SET name = ?, email = ?, password = ? WHERE id = ?";
 
    connection.query(sql, [param.name, param.email, param.password, param.id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json({results})
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)      
    connection.query('DELETE FROM posts WHERE id = ' + [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json({results})
    })
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }