const GET_CATEGORIES = 'api/categories/GET_CATEGORIES'
const GET_CATEGORIES_SUCCESS = 'api/categories/GET_CATEGORIES_SUCCESS'
const GET_CATEGORIES_FAIL = 'api/categories/GET_CATEGORIES_FAIL'

const GET_CATEGORY = 'api/categories/GET_CATEGORY'
const GET_CATEGORY_SUCCESS = 'api/categories/GET_CATEGORY_SUCCESS'
const GET_CATEGORY_FAIL = 'api/categories/GET_CATEGORY_FAIL'

// const CREATE_CATEGORY = 'api/categories/CREATE_CATEGORY'
// const CREATE_CATEGORY_SUCCESS = 'api/categories/CREATE_CATEGORY_SUCCESS'
// const CREATE_CATEGORY_FAIL = 'api/categories/CREATE_CATEGORY_FAIL'
//
// const EDIT_CATEGORY = 'api/categories/EDIT_CATEGORY'
// const EDIT_CATEGORY_SUCCESS = 'api/categories/EDIT_CATEGORY_SUCCESS'
// const EDIT_CATEGORY_FAIL = 'api/categories/EDIT_CATEGORY_FAIL'
//
// const DELETE_CATEGORY = 'api/categories/DELETE_CATEGORY'
// const DELETE_CATEGORY_SUCCESS = 'api/categories/DELETE_CATEGORY_SUCCESS'
// const DELETE_CATEGORY_FAIL = 'api/categories/DELETE_CATEGORY_FAIL'

const initialState = {
  getCategories: {
    success: false,
    isLoading: false,
    error: null,
    data: [],
  },
  getCompany: {
    success: false,
    isLoading: false,
    error: null,
    data: [],
  },
  // editCompany: {
  //   success: false,
  //   isLoading: false,
  //   error: null,
  // },
  // createCompany: {
  //   success: false,
  //   isLoading: false,
  //   error: null,
  // },
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ------------------------------------
    // GET ALL COMPANIES
    // ------------------------------------
    case GET_CATEGORIES:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          isLoading: true,
          data: [],
        },
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          isLoading: false,
          error: 'ERR GET_CATEGORIES',
        },
      }
    // ------------------------------------
    // GET CATEGORY
    // ------------------------------------
    case GET_CATEGORY:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: true,
          data: [],
        },
      }
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: false,
          error: 'ERR GET_CATEGORY',
        },
      }
    default:
      return state
  }
}
// ------------------------------------
// CREATE CATEGORY
// ------------------------------------
//     case CREATE_CATEGORY:
//       return {
//         ...state,
//         createCompany: {
//           ...state.createCompany,
//           isSubmitting: true,
//         },
//       }
//
//     case CREATE_CATEGORY_SUCCESS:
//       return {
//         ...state,
//         createCompany: {
//           ...state.createCompany,
//           isSubmitting: false,
//           success: true,
//         },
//       }
//
//     case CREATE_CATEGORY_FAIL:
//       return {
//         ...state,
//         createCompany: {
//           ...state.createCompany,
//           isSubmitting: false,
//           error: 'ERR POST CREATE_CATEGORY',
//         },
//       }
//     default:
//       return state
//   }
// }

export function getCategories() {
  return {
    types: [GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL],
    promise: client => client.get('api/categories'),
  }
}

export function getCompany(id) {
  return {
    types: [GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL],
    promise: client => client.get(`api/categories/${id}`),
  }
}
//
// export function createCompany(data) {
//   return {
//     types: [CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL],
//     promise: client => client.post('api/categories', { data }),
//   }
// }
//
// export function editCompany(data, companyId) {
//   return {
//     types: [EDIT_CATEGORY, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAIL],
//     promise: client => client.put(`api/categories/${companyId}`, { data }),
//   }
// }
//
// export function deleteCompany(companyId) {
//   return {
//     types: [DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL],
//     promise: client => client.del(`api/categories/${companyId}`),
//   }
