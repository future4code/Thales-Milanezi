import postsReducer from './posts'
import { setPosts } from '../actions/Actions'
import {setUser} from '../actions/Actions'
import {setSearch} from '../actions/Actions'
import {newUser} from '../actions/Actions'
import {setPostDetail} from '../actions/Actions'

const mockStore = {
  posts: [],
  user: [],
  postDetail: null,
  postComments: null,
  topicVote: null,
  loading: '',
  searchTerms: '',
  
}

describe("Testando os Reducers", () => {
  test("SET_POSTS", () => {
    const mockPost = "a"
    const mockAction = setPosts(mockPost)
    const newStore = postsReducer(mockStore, mockAction)

    expect(newStore.posts).toHaveLength(1)
    expect(newStore.posts[0]).toBeDefined()
    expect(newStore.posts[0]).toBe(mockPost)

  })
  test("SET_USER", () => {
    const mockPost = "a"
    const mockAction = setUser(mockPost)
    const newStore = postsReducer(mockStore, mockAction)

    expect(newStore.user).toHaveLength(1)
    expect(newStore.user[0]).toBeDefined()
    expect(newStore.user[0]).toBe(mockPost)

  })
  
  test("SET_POST_DETAIL", () => {
    const mockPost = ""
    const mockAction = setPostDetail(mockPost)
    const newStore = postsReducer(mockStore, mockAction)

    expect(newStore.postDetail).toBeDefined()
    expect(newStore.postDetail).toBe(mockPost)

  })
  test("SET_SEARCH", () => {
    const mockPost = ""
    const mockAction = setSearch(mockPost)
    const newStore = postsReducer(mockStore, mockAction)

    expect(newStore.searchTerms).toBeDefined()
    expect(newStore.searchTerms).toBe(mockPost)

  })
})