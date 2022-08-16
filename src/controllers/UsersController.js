/*Controller Default:
   A controller must have 5 functions in total. Template:
   index - Get method to list many results
   show - get method to show a one result
   create - post  method to make a register 
   update - put method to update a register
   delete - delete method to exclude a  register
 */

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;
    response.json({name, email, password});
  }
}

module.exports = UsersController;