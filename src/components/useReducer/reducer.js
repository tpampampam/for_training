/* eslint-disable default-case */

const reducer = (state, action) => {
    switch(action.type) {
        case 'INC':
            return {...state, count: state.count + 1}
        case 'DEC':
            return {...state, count: state.count - 1}
        case 'RND':
            return {...state, count: state.count * action.payload}
    }
}
export default reducer

export const inc = () => ({type: 'INC'})
export const dec = () => ({type: 'DEC'})
export const rnd = () => ({type: 'RND', payload: 3})