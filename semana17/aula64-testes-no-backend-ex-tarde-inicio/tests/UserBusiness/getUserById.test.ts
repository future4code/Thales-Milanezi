import { UserBusiness } from "../../src/business/UserBusiness";
import { NotFoundError } from '../../src/errors/NotFoundError'
import { User, stringToUserRole, UserRole } from "../../src/model/User";
import { getMaxListeners } from "cluster";
import { hash } from "bcryptjs";

describe("Testing the function getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return true when the error code is 'user do not exist' ", async () => {

    try {
      const getUserById = jest.fn()
      userDatabase = { getUserById }

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )

      await userBusiness.getUserById("bananinha")
    } catch (err) {
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("user do not exist")
    }
  })
  test("should return error message when user is undefined", async () => {
    const getUserById = jest.fn((id)=>{
      new User("001","jujubinha", "juju@gmail.com","12345",stringToUserRole("ADMIN"))
    })
    userDatabase = {getUserById}
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )
      const user = await userBusiness.getUserById("id")
      expect(getUserById).toHaveBeenCalledWith("id")
      expect(user).toEqual({
        id:"001",
        name: "jujubinha",
        email:"juju@gmail.com",
        role: UserRole.ADMIN
      })
  })
  // test("", () => {

  // })
  // test("", () => {

  // })
})