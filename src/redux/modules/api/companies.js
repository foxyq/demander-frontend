const GET_COMPANIES = 'api/companies/GET_COMPANIES'
const GET_COMPANIES_SUCCESS = 'api/companies/GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAIL = 'api/companies/GET_COMPANIES_FAIL'

const GET_COMPANY = 'api/companies/GET_COMPANY'
const GET_COMPANY_SUCCESS = 'api/companies/GET_COMPANY_SUCCESS'
const GET_COMPANY_FAIL = 'api/companies/GET_COMPANY_FAIL'

const CREATE_COMPANY = 'api/companies/CREATE_COMPANY'
const CREATE_COMPANY_SUCCESS = 'api/companies/CREATE_COMPANY_SUCCESS'
const CREATE_COMPANY_FAIL = 'api/companies/CREATE_COMPANY_FAIL'

const EDIT_COMPANY = 'api/companies/EDIT_COMPANY'
const EDIT_COMPANY_SUCCESS = 'api/companies/EDIT_COMPANY_SUCCESS'
const EDIT_COMPANY_FAIL = 'api/companies/EDIT_COMPANY_FAIL'

const DELETE_COMPANY = 'api/companies/DELETE_COMPANY'
const DELETE_COMPANY_SUCCESS = 'api/companies/DELETE_COMPANY_SUCCESS'
const DELETE_COMPANY_FAIL = 'api/companies/DELETE_COMPANY_FAIL'

const initialState = {
  getCompanies: {
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
  editCompany: {
    success: false,
    isLoading: false,
    error: null,
  },
  createCompany: {
    success: false,
    isLoading: false,
    error: null,
  },
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ------------------------------------
    // GET ALL COMPANIES
    // ------------------------------------
    case GET_COMPANIES:
      return {
        ...state,
        getCompanies: {
          ...state.getCompanies,
          isLoading: true,
          data: [],
        },
      }
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        getCompanies: {
          ...state.getCompanies,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_COMPANIES_FAIL:
      return {
        ...state,
        getCompanies: {
          ...state.getCompanies,
          isLoading: false,
          error: 'ERR GET_COMPANIES',
        },
      }
    // ------------------------------------
    // GET COMPANY
    // ------------------------------------
    case GET_COMPANY:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: true,
          data: [],
        },
      }
    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_COMPANY_FAIL:
      return {
        ...state,
        getCompany: {
          ...state.getCompany,
          isLoading: false,
          error: 'ERR GET_COMPANY',
        },
      }
    // ------------------------------------
    // CREATE COMPANY
    // ------------------------------------
    case CREATE_COMPANY:
      return {
        ...state,
        createCompany: {
          ...state.createCompany,
          isSubmitting: true,
        },
      }

    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        createCompany: {
          ...state.createCompany,
          isSubmitting: false,
          success: true,
        },
      }

    case CREATE_COMPANY_FAIL:
      return {
        ...state,
        createCompany: {
          ...state.createCompany,
          isSubmitting: false,
          error: 'ERR POST CREATE_COMPANY',
        },
      }
    default:
      return state
  }
}

export function getCompanies() {
  return {
    types: [GET_COMPANIES, GET_COMPANIES_SUCCESS, GET_COMPANIES_FAIL],
    promise: client => client.get('api/companies'),
  }
}

export function getCompany(id) {
  return {
    types: [GET_COMPANY, GET_COMPANY_SUCCESS, GET_COMPANY_FAIL],
    promise: client => client.get(`api/companies/${id}`),
  }
}

export function createCompany(data) {
  return {
    types: [CREATE_COMPANY, CREATE_COMPANY_SUCCESS, CREATE_COMPANY_FAIL],
    promise: client => client.post('api/companies', { data }),
  }
}

export function editCompany(data, companyId) {
  return {
    types: [EDIT_COMPANY, EDIT_COMPANY_SUCCESS, EDIT_COMPANY_FAIL],
    promise: client => client.put(`api/companies/${companyId}`, { data }),
  }
}

export function deleteCompany(companyId) {
  return {
    types: [DELETE_COMPANY, DELETE_COMPANY_SUCCESS, DELETE_COMPANY_FAIL],
    promise: client => client.del(`api/companies/${companyId}`),
  }
}
