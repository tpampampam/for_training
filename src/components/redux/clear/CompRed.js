import { useDispatch, useSelector } from "react-redux"
import { numerSelector, usersSelector } from "../store"
import {inc, dec} from '../clear/actions/actionsNum'
import { useEffect,  useRef } from "react"
import { fetchUsers } from "./actions/actionsUsers"

const CompRed = () => {

    const dispatch = useDispatch()
    const num = useSelector(numerSelector)
    const users = useSelector(usersSelector)




    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    const fetchingUsers = users.map(item => (
        <div key={item.id}>
            <b>name: {item.name}</b> surname: {item.surname}<br/>
            <i>email: {item.email}</i>
        </div>
    ))
    // let rect = fetchingUsers.getBoundingClientRect()
    // console.log(rect)

    return (
        <div>
            {num}
            <button  onClick={() => dispatch(inc())}>inc</button>
            <button onClick={() => dispatch(dec())}>dec</button><br/>
            {fetchingUsers}
        </div>
    )
}

export default CompRed