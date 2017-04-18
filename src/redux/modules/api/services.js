const GET_SERVICES = 'api/services/GET_SERVICES'
const GET_SERVICES_SUCCESS = 'api/services/GET_SERVICES_SUCCESS'
const GET_SERVICES_FAIL = 'api/services/GET_SERVICES_FAIL'

const GET_SERVICE = 'api/services/GET_SERVICE'
const GET_SERVICE_SUCCESS = 'api/services/GET_SERVICE_SUCCESS'
const GET_SERVICE_FAIL = 'api/services/GET_SERVICE_FAIL'

const CREATE_SERVICE = 'api/services/CREATE_SERVICE'
const CREATE_SERVICE_SUCCESS = 'api/services/CREATE_SERVICE_SUCCESS'
const CREATE_SERVICE_FAIL = 'api/services/CREATE_SERVICE_FAIL'

const EDIT_SERVICE = 'api/services/EDIT_SERVICE'
const EDIT_SERVICE_SUCCESS = 'api/services/EDIT_SERVICE_SUCCESS'
const EDIT_SERVICE_FAIL = 'api/services/EDIT_SERVICE_FAIL'

const DELETE_SERVICE = 'api/services/DELETE_SERVICE'
const DELETE_SERVICE_SUCCESS = 'api/services/DELETE_SERVICE_SUCCESS'
const DELETE_SERVICE_FAIL = 'api/services/DELETE_SERVICE_FAIL'

const initialState = {
  getServices: {
    success: false,
    isLoading: false,
    error: null,
    data: [],
  },
  getService: {
    success: false,
    isLoading: false,
    error: null,
    data: null,
  },
  editService: {
    success: false,
    isLoading: false,
    error: null,
  },
  createService: {
    success: false,
    isLoading: false,
    error: null,
  },
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ------------------------------------
    // GET ALL SERVICES
    // ------------------------------------
    case GET_SERVICES:
      return {
        ...state,
        getServices: {
          ...state.getServices,
          isLoading: true,
          data: [],
        },
      }
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        getServices: {
          ...state.getServices,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_SERVICES_FAIL:
      return {
        ...state,
        getServices: {
          ...state.getServices,
          isLoading: false,
          error: 'ERR GET_SERVICES',
        },
      }
    // ------------------------------------
    // GET SERVICE
    // ------------------------------------
    case GET_SERVICE:
      return {
        ...state,
        getService: {
          ...state.getService,
          isLoading: true,
          data: null,
        },
      }
    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        getService: {
          ...state.getService,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_SERVICE_FAIL:
      return {
        ...state,
        getService: {
          ...state.getService,
          isLoading: false,
          error: 'ERR GET_SERVICE',
        },
      }
    // ------------------------------------
    // CREATE SERVICE
    // ------------------------------------
    case CREATE_SERVICE:
      return {
        ...state,
        createService: {
          ...state.createService,
          isSubmitting: true,
        },
      }

    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        createService: {
          ...state.createService,
          isSubmitting: false,
          success: true,
        },
      }

    case CREATE_SERVICE_FAIL:
      return {
        ...state,
        createService: {
          ...state.createService,
          isSubmitting: false,
          error: 'ERR POST CREATE_SERVICE',
        },
      }

    default:
      return state
  }
}

export function getServices() {
  return {
    types: [GET_SERVICES, GET_SERVICES_SUCCESS, GET_SERVICES_FAIL],
    promise: client => client.get('api/services'),
  }
}

export function getService(id) {
  return {
    types: [GET_SERVICE, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL],
    promise: client => client.get(`api/services/${id}`),
  }
}

export function createService(data) {
  return {
    types: [CREATE_SERVICE, CREATE_SERVICE_SUCCESS, CREATE_SERVICE_FAIL],
    promise: client => client.post('api/services', { data }),
  }
}

export function editService(data, serviceId) {
  return {
    types: [EDIT_SERVICE, EDIT_SERVICE_SUCCESS, EDIT_SERVICE_FAIL],
    promise: client => client.put(`api/services/${serviceId}`, { data }),
  }
}

export function deleteService(serviceId) {
  return {
    types: [DELETE_SERVICE, DELETE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL],
    promise: client => client.del(`api/services/${serviceId}`),
  }
}
