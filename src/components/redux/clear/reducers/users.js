/* eslint-disable default-case */

const initialState = {
    users: []
}

const users = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_USERS':
            return {...state, 
            users: [...state.users, ...action.payload]}
            
        default:
            return state
    }

}

export default users

export const firstFetchUsers = payload => ({type: 'ALL_USERS', payload})