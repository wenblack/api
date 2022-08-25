const {hash, compare} = require (`bcryptjs`)
const AppError = require ("../utils/AppError")
//Crud of Users class
const sqliteConnection = require("../database/sqlite");
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
    const {name,email, password, old_password} = request.body
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
    user.name = name ?? user.name //keeping the same if not informed
    user.email = email ?? user.email //keeping the same if not informed
    //Check blank old Password
    if (password && !old_password) {
      throw new AppError (`Please send the old password`)
    }
    //Compare the passwords
    if (password && !old_password) {
      const checkOldPassword = await compare(old_password, password)
      if(!checkOldPassword){
        throw new AppError (`Passwords don't matching.`)
      }
      //update password value
      user.password = await hash(password,8) 
    }
    
    //Sending to Database
    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      updated_at = DATETIME('now'),
      password = ?
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    )

    return response.json()
  }
}

module.exports = UsersController;