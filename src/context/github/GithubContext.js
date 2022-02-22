import { createContext, useReducer } from "react"

import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: [],
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  // start loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    })
  // fetch initial users ('Testing purpose')
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      method: "GET",
    })
    const data = await response.json()
    dispatch({
      type: "GET_USERS",
      payload: data,
    })
  }
  // search user by username
  const searchUsers = async (user) => {
    setLoading()
    const param = new URLSearchParams({
      q: user,
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${param}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      method: "GET",
    })
    const { items } = await response.json()
    console.log(items)
    dispatch({
      type: "GET_USERS",
      payload: items,
    })
  }
  //fetch single user
  const getUser = async (username) => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      method: "GET",
    })
    if (response.status === 404) {
      window.location = "/notfound"
    } else {
      const data = await response.json()
      dispatch({
        type: "GET_USER",
        payload: data,
      })
    }
  }
  // clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    })
  }

  // get user Repos
  const getUserRepos = async (username) => {
    setLoading()

    const param = new URLSearchParams({
      sort: 'created',
      per_page:10
    })

    const response = await fetch(`${GITHUB_URL}/users/${username}/repos?${param}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      method: "GET",
    })
    const data= await response.json()
    dispatch({
      type: "GET_REPOS",
      payload: data,
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        fetchUsers,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
