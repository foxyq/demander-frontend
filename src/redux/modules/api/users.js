const GET_USERS = 'api/users/GET_USERS'
const GET_USERS_SUCCESS = 'api/users/GET_USERS_SUCCESS'
const GET_USERS_FAIL = 'api/users/GET_USERS_FAIL'

const GET_USER = 'api/users/GET_USER'
const GET_USER_SUCCESS = 'api/users/GET_USER_SUCCESS'
const GET_USER_FAIL = 'api/users/GET_USER_FAIL'

const CREATE_USER = 'api/users/CREATE_USER'
const CREATE_USER_SUCCESS = 'api/users/CREATE_USER_SUCCESS'
const CREATE_USER_FAIL = 'api/users/CREATE_USER_FAIL'

const EDIT_USER = 'api/users/EDIT_USER'
const EDIT_USER_SUCCESS = 'api/users/EDIT_USER_SUCCESS'
const EDIT_USER_FAIL = 'api/users/EDIT_USER_FAIL'

const DELETE_USER = 'api/users/DELETE_USER'
const DELETE_USER_SUCCESS = 'api/users/DELETE_USER_SUCCESS'
const DELETE_USER_FAIL = 'api/users/DELETE_USER_FAIL'

const initialState = {
  getUser: {
    success: false,
    isLoading: false,
    error: null,
    data: null,
  },
  getUsers: {
    success: false,
    isLoading: false,
    error: null,
    data: [],
  },
  createUser: {
    success: false,
    isSubmitting: false,
    error: null,
  },
  editUser: {
    success: false,
    isSubmitting: false,
    error: null,
  },
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          isLoading: true,
          data: [],
        },
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_USERS_FAIL:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          isLoading: false,
          error: 'ERR GET_USERS',
        },
      }
    // ------------------------------------


    case GET_USER:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          isLoading: true,
          data: null,
        },
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_USER_FAIL:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          isLoading: false,
          error: 'ERR GET_USER',
        },
      }
    // ------------------------------------


    case CREATE_USER:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          isSubmitting: true,
        },
      }

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          isSubmitting: false,
          success: true,
        },
      }

    case CREATE_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          isSubmitting: false,
          error: 'ERR POST CREATE_USER',
        },
      }
    // ------------------------------------


    default:
      return state
  }
}

export function getUsers() {
  return {
    types: [GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL],
    promise: client => client.get('api/users'),
  }
}

export function getUser(id) {
  return {
    types: [GET_USER, GET_USER_SUCCESS, GET_USER_FAIL],
    promise: client => client.get(`api/users/${id}`),
  }
}

export function createUser(data) {
  return {
    types: [CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL],
    promise: client => client.post('api/users', { data }),
  }
}

export function editUser(data, userId) {
  return {
    types: [EDIT_USER, EDIT_USER_SUCCESS, EDIT_USER_FAIL],
    promise: client => client.put(`api/users/${userId}`, { data }),
  }
}

export function deleteUser(userId) {
  return {
    types: [DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAIL],
    promise: client => client.del(`api/users/${userId}`),
  }
}
