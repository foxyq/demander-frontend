const GET_DEMANDS = 'api/demands/GET_DEMANDS'
const GET_DEMANDS_SUCCESS = 'api/demands/GET_DEMANDS_SUCCESS'
const GET_DEMANDS_FAIL = 'api/demands/GET_DEMANDS_FAIL'

const GET_DEMAND = 'api/demands/GET_DEMAND'
const GET_DEMAND_SUCCESS = 'api/demands/GET_DEMAND_SUCCESS'
const GET_DEMAND_FAIL = 'api/demands/GET_DEMAND_FAIL'

const CREATE_DEMAND = 'api/demands/CREATE_DEMAND'
const CREATE_DEMAND_SUCCESS = 'api/demands/CREATE_DEMAND_SUCCESS'
const CREATE_DEMAND_FAIL = 'api/demands/CREATE_DEMAND_FAIL'

const EDIT_DEMAND = 'api/demands/EDIT_DEMAND'
const EDIT_DEMAND_SUCCESS = 'api/demands/EDIT_DEMAND_SUCCESS'
const EDIT_DEMAND_FAIL = 'api/demands/EDIT_DEMAND_FAIL'

const DELETE_DEMAND = 'api/demands/DELETE_DEMAND'
const DELETE_DEMAND_SUCCESS = 'api/demands/DELETE_DEMAND_SUCCESS'
const DELETE_DEMAND_FAIL = 'api/demands/DELETE_DEMAND_FAIL'

const initialState = {
  getDemands: {
    success: false,
    isLoading: false,
    error: null,
    data: [],
  },
  getDemand: {
    success: false,
    isLoading: false,
    error: null,
    data: null,
  },
  editDemand: {
    success: false,
    isLoading: false,
    error: null,
  },
  createDemand: {
    success: false,
    isLoading: false,
    error: null,
  },
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ------------------------------------
    // GET ALL DEMANDS
    // ------------------------------------
    case GET_DEMANDS:
      return {
        ...state,
        getDemands: {
          ...state.getDemands,
          isLoading: true,
          data: [],
        },
      }
    case GET_DEMANDS_SUCCESS:
      return {
        ...state,
        getDemands: {
          ...state.getDemands,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_DEMANDS_FAIL:
      return {
        ...state,
        getDemands: {
          ...state.getDemands,
          isLoading: false,
          error: 'ERR GET_DEMANDS',
        },
      }
    // ------------------------------------
    // GET DEMAND
    // ------------------------------------
    case GET_DEMAND:
      return {
        ...state,
        getDemand: {
          ...state.getDemand,
          isLoading: true,
          data: null,
        },
      }
    case GET_DEMAND_SUCCESS:
      return {
        ...state,
        getDemand: {
          ...state.getDemand,
          isLoading: false,
          success: true,
          data: action.result,
        },
      }
    case GET_DEMAND_FAIL:
      return {
        ...state,
        getDemand: {
          ...state.getDemand,
          isLoading: false,
          error: 'ERR GET_DEMAND',
        },
      }
    // ------------------------------------
    // CREATE DEMAND
    // ------------------------------------
    case CREATE_DEMAND:
      return {
        ...state,
        createDemand: {
          ...state.createDemand,
          isSubmitting: true,
        },
      }

    case CREATE_DEMAND_SUCCESS:
      return {
        ...state,
        createDemand: {
          ...state.createDemand,
          isSubmitting: false,
          success: true,
        },
      }

    case CREATE_DEMAND_FAIL:
      return {
        ...state,
        createDemand: {
          ...state.createDemand,
          isSubmitting: false,
          error: 'ERR POST CREATE_DEMAND',
        },
      }

    default:
      return state
  }
}

export function getDemands(args) {
  return {
    types: [GET_DEMANDS, GET_DEMANDS_SUCCESS, GET_DEMANDS_FAIL],
    promise: client => client.get(`api/demands?${args}`),
  }
}

export function getDemand(id) {
  return {
    types: [GET_DEMAND, GET_DEMAND_SUCCESS, GET_DEMAND_FAIL],
    promise: client => client.get(`api/demands/${id}`),
  }
}

export function createDemand(data) {
  return {
    types: [CREATE_DEMAND, CREATE_DEMAND_SUCCESS, CREATE_DEMAND_FAIL],
    promise: client => client.post('api/demands', { data }),
  }
}

export function editDemand(data, demandId) {
  return {
    types: [EDIT_DEMAND, EDIT_DEMAND_SUCCESS, EDIT_DEMAND_FAIL],
    promise: client => client.put(`api/demands/${demandId}`, { data }),
  }
}

export function deleteDemand(demandId) {
  return {
    types: [DELETE_DEMAND, DELETE_DEMAND_SUCCESS, DELETE_DEMAND_FAIL],
    promise: client => client.del(`api/demands/${demandId}`),
  }
}
