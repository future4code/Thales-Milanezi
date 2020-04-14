import {setUser} from './Actions'
import {setSearch} from './Actions'
import {setPosts} from './Actions'
import {newUser} from './Actions'
import {setPostDetail} from './Actions'

describe("Posts and Users actions-creators", () => {
  test("SET_USER", () => {
    const mockSetUseruserData = "fui na padaria compra um doce";
    const mockedAction = setUser(mockSetUseruserData);

    expect(mockedAction.type).toEqual('SET_USER')
    expect(mockedAction.payload.userData).toBeDefined()
    expect(mockedAction.payload.userData).toEqual(mockSetUseruserData)
  })
  test("SET_SEARCH", () => {
    const mockSetSearchTerms = "fui na academia malhar";
    const mockedAction = setSearch(mockSetSearchTerms);

    expect(mockedAction.type).toEqual('SET_SEARCH')
    expect(mockedAction.payload.terms).toBeDefined()
    expect(mockedAction.payload.terms).toEqual(mockSetSearchTerms)
  })
  test("SET_POSTS", () => {
    const mockSetPosts = "Hoje eu comi pure de batata top";
    const mockedAction = setPosts(mockSetPosts);

    expect(mockedAction.type).toEqual('SET_POSTS')
    expect(mockedAction.payload.posts).toBeDefined()
    expect(mockedAction.payload.posts).toEqual(mockSetPosts)
  })
  test("NEW_USER", () => {
    const mockSetnewUser = "hoje tem jogo do palmeiras !";
    const mockedAction = newUser(mockSetnewUser);

    expect(mockedAction.type).toEqual('NEW_USER')
    expect(mockedAction.payload.newUserData).toBeDefined()
    expect(mockedAction.payload.newUserData).toEqual(mockSetnewUser)
  })
  test("SET_POST_DETAIL", () => {
    const mockUserPostDetail = "Piratas gostam de navegar em alto mar";
    const mockedAction = setPostDetail(mockUserPostDetail);

    expect(mockedAction.type).toEqual('SET_POST_DETAIL')
    expect(mockedAction.payload.post).toBeDefined()
    expect(mockedAction.payload.post).toEqual(mockUserPostDetail)
  })
})