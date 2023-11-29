import { firstFetchUsers } from "../reducers/users"


export const fetchUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => dispatch(firstFetchUsers(data)))
}
// then(data => dispatch(firstFetchUsers(data)))