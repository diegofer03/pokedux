const initialState = {
    loading: false
}

const uiObj = (state, payload) => ({
    'SET_LOADING' : {
        ...state,
        loading: payload
    },
})

export const uiReducer = (state = initialState, action) => {
    return uiObj(state, action.payload)[action.type] || {...state}
}