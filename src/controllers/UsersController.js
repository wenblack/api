const {hash} = require (`bcryptjs`)
const AppError = require ("../utils/AppError")
//Crud of Users class
const sqliteConnection = require("../database/sqlite")
class UsersController {
  async create(request, response) {
    //Get infos of body
    const { name, email, password } = request.body;
    //create connection
    const database = await sqliteConnection();
    //Checking users
    const checkUserExist =  await database.get('SELECT * FROM users WHERE email =(?)', [email])
    //Throwing error
    if (checkUserExist) {
      throw new AppError("Email already in use")
    }
    //Encrypting User Password
    const hashedPassword = await hash(password, 8)
    await database.run(`INSERT INTO users (name,email, password) VALUES (?,?,?)`,
    [name,email,hashedPassword])
    return response.status(201).json({})
  }

  async update(request, response) {
    //get info of body of request 
    const {name,email} = request.body
    const {id} = request.params
    const database = await sqliteConnection()
    //Searching user in database
    const user =  await database.get('SELECT * FROM users WHERE id =(?)', 
    [id])
    //throwing error
    if (!user){
      throw new AppError(`User not found`)
    }
    //verifying duplicated emails
    const userWithUpdatedEmail = await database.get(`SELECT * FROM users WHERE email =(?)`,[email])
    //throwing error
    if( userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError(`Email in use`)
    }
    //Update User
    user.name = name;
    user.email = email;

    
    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      updated_at = ?
      WHERE id = ?`,
      [user.name, user.email, new Date(), id]
    )

    return response.json()
  }
}

module.exports = UsersController;